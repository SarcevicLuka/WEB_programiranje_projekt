import React, { useEffect } from 'react';
import { ProgressBar as Bar } from 'react-bootstrap'
import useStorage from '../hooks/useStorage';

const ProgressBar = ({ image, setImage }) => {
    const { url, progress } = useStorage(image);
    
    useEffect(() => {
        if(url){
            setImage(null);
        }
    }, [url, setImage]);

    return (
        <Bar now={progress} label={`${progress}%`}/>
    )
}

export default ProgressBar;