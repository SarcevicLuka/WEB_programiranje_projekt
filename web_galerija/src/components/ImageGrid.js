import React, { useEffect } from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import { Container } from "react-bootstrap";

const ImageGrid = () => {
    const { posts } = useFirestore("users");
    //console.log(docs);

    return (
        <Container>
            <div className="row row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-1">
                    {posts && posts.map((post) => (
                      <motion.div className="col m-auto d-flex justify-content-center" layout >
                        <motion.img src={post.url} 
                            className=" shadow-1-strong rounded" 
                            alt="alternate text" 
                            //key={doc.id} 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}/>
                      </motion.div>
                    ))}
            </div>
        </Container>
    )
}

export default ImageGrid;