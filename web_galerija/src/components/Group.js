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
            <h1>{groupID}</h1>
            <NavBar />
            <div>
                <UploadForm />
                <ImageGrid collection="groups"/>
            </div>
        </>
    )
}

export default Group;