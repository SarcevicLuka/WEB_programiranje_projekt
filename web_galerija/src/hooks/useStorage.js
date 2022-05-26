import { useState, useEffect } from 'react';
import { storage, firestore } from '../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { doc, Timestamp, updateDoc, arrayUnion } from 'firebase/firestore';
import { useUserAuth } from '../context/UserAuthContext';

const useStorage = (image, postDesc, collection, docID) => {
    const { user } = useUserAuth();
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    const storageRef = ref(storage, `images/${image.name}`);    


    useEffect(() => {
        const docRef = doc(firestore, collection, docID);

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
                updateDoc(docRef, {
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