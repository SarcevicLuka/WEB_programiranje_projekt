import { useState, useEffect } from 'react';
import { firestore } from '../firebase';
import { onSnapshot, doc } from 'firebase/firestore';
import { useUserAuth } from '../context/UserAuthContext';

const useFirestore = (col) => {
    const[posts, setPosts] = useState([]);
    const { user } = useUserAuth();

    useEffect(() => {
        const document = doc(firestore, col, `${user.email}`)
        const unsubscribe = onSnapshot(document, (doc) => {
            setPosts(doc.data().posts);
        })    

        return () => unsubscribe();
    }, [user])

    return { posts };
}

export default useFirestore;