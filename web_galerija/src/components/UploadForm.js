import React, { useEffect, useState } from 'react';
import { Form, Button, Modal, FormLabel, Alert} from 'react-bootstrap';
import ProgressBar from './ProgressBar';

const UploadForm = ({collection, docID}) => {

    const [submit, setSubmit] = useState(false);
    const [image, setImage] = useState(null);
    const [postDesc, setPostDesc] = useState("");
    const [error, setError] = useState(null);
    const types = ['image/png', 'image/jpeg'];
    const [show, setShow] = useState(false);
    
    
    const handleClose = () => {
        setImage(null);
        setPostDesc("");
        setShow(false);
    }

    const handleShow = () => setShow(true);

    const changeHandler = (e) => {
        let selectedImage = e.target.files[0];
        if (selectedImage && types.includes(selectedImage.type)) {
            setImage(selectedImage);
            setError("");
        } else {
            setImage(null);
            setError("Select .png or .jpeg type file");
        }
    }

    const handleDescription = (e) => {
        setPostDesc(e.target.value);
        console.log(postDesc);
    }

    const handleUpload = () => {
        setSubmit(true);
        setPostDesc("")
    }

    useEffect (() => {
        if(!image){
            setShow(false);
        }
    }, [image])

    return (
        <>
            <div className='text-center'>
                <Button className="mt-2" variant="outline-primary" onClick={handleShow}>
                    Create a post
                </Button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Create a new post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <FormLabel>Select image</FormLabel>
                        <Form.Control type="file" onChange={changeHandler}/>
                        <div>
                            {error && <Alert variant="warning" className="text-center mt-1">{error}</Alert>}
                            {submit && <ProgressBar image={image} setImage={setImage} setSubmit={setSubmit} postDesc={postDesc} collection={collection} docID={docID}/>}
                        </div>
                        <Form.Group
                            className="mb-3 mt-2"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Enter post description</Form.Label>
                            <Form.Control as="textarea" maxLength="70" rows={2} onChange={handleDescription}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpload}>
                        Upload
                    </Button>
                </Modal.Footer>
            </Modal>
        </>






    );
}

export default UploadForm;