import React, { useEffect, useState } from 'react';
import { Form, Button, Modal, FormLabel, Alert} from 'react-bootstrap';
import ProgressBar from './ProgressBar';

const UploadForm = () => {

    const [submit, setSubmit] = useState(false);
    const [image, setImage] = useState(null);
    const [postDesc, setPostDesc] = useState("");
    const [error, setError] = useState(null);
    const types = ['image/png', 'image/jpeg'];

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
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

    const handleUpload = () => {
        setSubmit(true);
    }

    useEffect (() => {
        if(!image){
            setShow(false);
        }
    }, [image])

    return (
        <>
            <div className='text-center'>
                <Button className="" variant="outline-primary" onClick={handleShow}>
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
                            {submit && <ProgressBar image={image} setImage={setImage} setSubmit={setSubmit} postDesc={postDesc}/>}
                        </div>
                        <Form.Group
                            className="mb-3 mt-2"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" maxlength="70" rows={2} onChange={(e) => setPostDesc(e.target.value)}/>
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