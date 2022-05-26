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
            <NavBar collection="groups"/>
            <div>
                <UploadForm collection="groups"/>
                <ImageGrid collection="groups"/>
            </div>
        </>
    )
}

export default Group;