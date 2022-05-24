import React, { useState, useEffect } from 'react';
import { Accordion, Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import useFirestore from '../hooks/useFirestore';

const CreateJoinGroupForm = () => {

    const [groupName, setGroupName] = useState("");
    const { groups, createGroup } = useFirestore("users");

    const handleCreate = () => {
        createGroup(groupName);
    }

    useEffect(() => {
        console.log("Use effect");
    }, [groups, handleCreate]);

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

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div>{groups && groups.map((group) => (
                <div>{group.groupName}</div>
            ))
            }</div>
        </>
    )
}

export default CreateJoinGroupForm