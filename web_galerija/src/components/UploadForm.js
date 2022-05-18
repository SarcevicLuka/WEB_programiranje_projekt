import React, { useState } from 'react';
import { Form, Container, Spinner } from 'react-bootstrap';
import ProgressBar from './ProgressBar';

const UploadForm = () => {

    const [image, setImage] = useState(null);
    const [error, setError] = useState(null);
    const types = ['image/png', 'image/jpeg'];
    console.log(image);

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

    return (
        <Container style={{maxWidth: "400px"}}>
            <Form>
                <Form.Control type="file" onInput={changeHandler} />
                <div>
                    {error && <div> {error} </div>}
                    {image && <ProgressBar image={image} setImage={setImage} />}
                </div>
            </Form>
        </Container>
    )
}

export default UploadForm;