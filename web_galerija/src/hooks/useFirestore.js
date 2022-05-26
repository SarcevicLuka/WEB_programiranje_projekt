import { useState, useEffect } from 'react';
import { firestore } from '../firebase';
import { onSnapshot, doc, updateDoc, setDoc, Timestamp, collection, query, where, getDocs } from 'firebase/firestore';
import { useUserAuth } from '../context/UserAuthContext';

const useFirestore = (col) => {
    const [posts, setPosts] = useState([]);
    const [groups, setGroups] = useState([]);
    const [searchItems, setSearchItems] = useState([]);
    const { user } = useUserAuth();
    let date = Timestamp.now();


    const deletePost = async (result) => {
        if(col === "users"){
            var document = doc(firestore, col, `${user.email}`);
        }
        try {
            await updateDoc(document, {
                posts: result,
            })
        } catch (error) {
            console.log(error);
        }
    }

    const createGroup = async (groupName) => {
        const groupDoc = doc(firestore, 'groups', date + "_" + user.email);
        try {
            await setDoc(groupDoc, {
                groupName: groupName,
                users: [user.email],
                posts: [],
            });
        } catch (error) {
            console.log(error);
        }
    }

    const getUsersGroups = () => {
        const groupsDoc = collection(firestore, "groups");
        onSnapshot(groupsDoc, async () => {
            const getUsersGroupsQuery = query(collection(firestore, "groups"), where('users', 'array-contains', `${user.email}`));
            const querySnapshot = await getDocs(getUsersGroupsQuery);
            let usersGroups = [];
            querySnapshot.forEach((doc) => {
                usersGroups.push({ ...doc.data(), groupName: doc.data().groupName, id: doc.id });
            });
            setGroups(usersGroups);
        })
    }

    const searchGroups = async (groupName) => {
        const searchGroupsQuery = query(collection(firestore, "groups"), where('groupName', '==', `${groupName}`));
        const querySnapshot = await getDocs(searchGroupsQuery);
        let searchGroups = [];
        querySnapshot.forEach((doc) => {
            searchGroups.push({ ...doc.data(), groupName: doc.data().groupName, id: doc.id });
        });
        setSearchItems(searchGroups);
    }

    useEffect(() => {
        if(col === "users"){
            var document = doc(firestore, col, `${user.email}`);
        }
        const unsubscribePosts = onSnapshot(document, (doc) => {
            setPosts(doc.data().posts);
        })

        getUsersGroups();
        searchGroups();

        return () => {
            unsubscribePosts();
        };
    }, [user])

    return { posts, groups, deletePost, createGroup, searchGroups, searchItems };
}

export default useFirestore;