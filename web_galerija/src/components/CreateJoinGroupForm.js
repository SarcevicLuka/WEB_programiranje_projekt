import React, { useState, useEffect } from 'react';
import { Accordion, Form, Button, InputGroup, FormControl, ListGroup } from 'react-bootstrap';
import useFirestore from '../hooks/useFirestore';
import { useNavigate } from "react-router-dom";

const CreateJoinGroupForm = ({collection, docID}) => {

    const [groupName, setGroupName] = useState("");
    const { groups, createGroup, searchGroups, searchItems, joinGroup } = useFirestore(collection, docID);
    const navigate = useNavigate();

    const handleCreate = () => {
        console.log("created");
        createGroup(groupName);
    }

    const handleSearch = () => {
        try{
            searchGroups(groupName);
            console.log(searchItems);
        } catch (error){
            console.log(error);
        }
    }

    const handleGroupLink = (group) => {
        navigate("/group", {state : {groupID : group.id, groupName: group.groupName}});
    }

    const handleJoinGroup = (groupID) =>{
        joinGroup(groupID);
    }

    useEffect(() => {
        console.log("Use effect");
    }, [groups, handleCreate, handleSearch, searchItems, handleGroupLink]);

    return (
        <>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Create group</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Form.Label>Enter group name</Form.Label>
                            <InputGroup className="mb-3">
                                <FormControl
                                    aria-describedby="group-name" onChange={(e) => setGroupName(e.target.value)}
                                />
                                <Button variant="outline-success" id="button-addon2" onClick={handleCreate}>
                                    Create
                                </Button>
                            </InputGroup>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>Join group</Accordion.Header>
                    <Accordion.Body>
                    <Form.Label>Search groups</Form.Label>
                        <InputGroup className="mb-3">
                            <FormControl
                                aria-describedby="group-name" onChange={(e) => setGroupName(e.target.value)}
                            />
                            <Button variant="outline-success" id="button-addon2" onClick={handleSearch}>
                                Search
                            </Button>
                        </InputGroup>
                        <div>
                            <ListGroup>
                                {searchItems && searchItems.map((item) => (
                                        <ListGroup.Item className='searchItem d-flex justify-content-between align-items-center'>{item.groupName}
                                            <Button variant='outline-primary' onClick={() => handleJoinGroup(item.id)}>
                                                Join
                                            </Button>
                                        
                                        </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div>
                <h5 className='mt-5'>My groups</h5>
                <ListGroup className='group-list'>
                    {groups && groups.map((group) => (
                        <ListGroup.Item className='group' action onClick={() => handleGroupLink(group)}>{group.groupName}</ListGroup.Item>
                    ))
                    }
                </ListGroup> 
            </div>
        </>
    )
}

export default CreateJoinGroupForm