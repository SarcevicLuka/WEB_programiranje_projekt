import { useState, useEffect } from 'react';
import { firestore } from '../firebase';
import { onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { useUserAuth } from '../context/UserAuthContext';

const useFirestore = (col) => {
    const[posts, setPosts] = useState([]);
    const { user } = useUserAuth();
    const document = doc(firestore, col, `${user.email}`);

    const deletePost = async (result) => {
        await updateDoc(document, {
            posts: result,
        })
    }

    useEffect(() => {
        const unsubscribe = onSnapshot(document, (doc) => {
            setPosts(doc.data().posts.reverse());
        })    

        return () => unsubscribe();
    }, [user])

    return { posts, deletePost };
}

export default useFirestore;