import React from 'react';
import NavBar from './NavBar';
import UploadForm from './UploadForm';
import ImageGrid from './ImageGrid';
import { useLocation } from 'react-router-dom';

const Group = () => {

    const { state } = useLocation();
    const { groupID } = state;

    return (
        <>
            <NavBar collection="groups" docID={groupID}/>
            <div>
                <UploadForm collection="groups" docID={groupID}/>
                <ImageGrid collection="groups" docID={groupID}/>
            </div>
        </>
    )
}

export default Group;