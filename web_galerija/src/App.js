import ImageGrid from './components/ImageGrid';
import NavBar from './components/NavBar';
import LogIn from './components/LogIn';
import { useEffect, useState } from "react";
import { storage } from "./firebase-config";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";


function App() {
  return (
    <div>
      <NavBar />
      
      <input type="file" onChange={(event) => {
        setImageUpload(event.target.files[0]);
      }} />
      <button onClick={uploadImage}>Upload Image</button>
      {imageList.map((url) => {
        return <img src={url}/>
      })}
      


      <ImageGrid />
      <LogIn />
    </div>


  );
}

export default App;
