import { useState, useEffect } from 'react';
import { storage, firestore } from '../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { doc, Timestamp, updateDoc, arrayUnion } from 'firebase/firestore';
import { useUserAuth } from '../context/UserAuthContext';

const useStorage = (image, postDesc, collection) => {
    const { user } = useUserAuth();
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    const storageRef = ref(storage, `images/${image.name}`);    


    useEffect(() => {
        if(collection === "users"){
            var usersDocRef = doc(firestore, `${collection}`, `${user.email}`);
            console.log("users");
        }
        /*else if(collection === "groups"){
            var groupsDocRef = doc(firestore, `${collection}`, `${user.email}`);
        }*/
        const uploadTask = uploadBytesResumable(storageRef, image);
        uploadTask.on('state_changed', (snapshot) => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(percentage);   
        },
        (err) => {
            setError(err);
        },
        async () => {
            await getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                let date = Timestamp.now();
                setUrl(url);
                updateDoc(usersDocRef, {
                    posts: arrayUnion ({
                        createdAt: date,
                        id: date + user.email,
                        url: url,
                        description: postDesc
                    })
                })
                
            }
            );
        }
        );
    }, [image]);

    return { url, error, progress }
}

export default useStorage;