import { useState, useEffect } from 'react';
import { firestore } from '../firebase';
import { onSnapshot, doc, collection } from 'firebase/firestore';
import { useUserAuth } from '../context/UserAuthContext';

const useFirestore = (col) => {
    const[posts, setPosts] = useState([]);
    const { user } = useUserAuth();

    useEffect(() => {
        console.log(user.email);
        const document = doc(firestore, col, `${user.email}`)
        const unsubscribe = onSnapshot(document, (doc) => {
            console.log(doc.data().posts)
            setPosts(doc.data().posts);
        })    

        return () => unsubscribe();
    }, [user])

    /*posts.map((post) => {
        console.log(post);
    })*/

    return { posts };
}

export default useFirestore;