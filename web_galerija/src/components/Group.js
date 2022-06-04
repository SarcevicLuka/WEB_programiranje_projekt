import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import UploadForm from './UploadForm';
import ImageGrid from './ImageGrid';
import { useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import useFirestore from '../hooks/useFirestore';
import { useNavigate } from 'react-router-dom';

const Group = () => {

    const { state } = useLocation();
    const { groupID, groupName } = state;
    const { leaveGroup } = useFirestore("groups", groupID);
    const navigate = useNavigate();

    const handleLeaveGroup = () => {
        leaveGroup();
        navigate("/home");
    }

    return (
        <>
            <NavBar collection="groups" docID={groupID}/>
                <h2 className='page-title text-center'>{groupName} <Button variant="outline-danger" className='leave-button' onClick={handleLeaveGroup}>Leave group</Button></h2>
            <div>
                <UploadForm collection="groups" docID={groupID}/>
                <ImageGrid collection="groups" docID={groupID}/>
            </div>
        </>
    )
}

export default Group;