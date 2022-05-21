import { useState, useEffect } from 'react';
import { storage, firestore } from '../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { doc, serverTimestamp, updateDoc, arrayUnion } from 'firebase/firestore';
import { useUserAuth } from '../context/UserAuthContext';

const useStorage = (image) => {
    const { user } = useUserAuth();
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const storageRef = ref(storage, `images/${image.name}`);
        const docRef = doc(firestore, 'users', `${user.email}`);
        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on('state_changed', (snapshot) => {
            let percentage =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(percentage);
        },
        (err) => {
            setError(err);
        },
        async () => {
            await getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                setUrl(url);
                updateDoc(docRef, {
                    posts: arrayUnion ({
                        //created_at: serverTimestamp(),
                        url: url,
                        description: "Description"
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