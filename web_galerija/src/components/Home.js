import React, {useEffect} from "react";
import ImageGrid from "./ImageGrid";
import UploadForm from "./UploadForm";
import NavBar from "./NavBar";
import { useUserAuth } from '../context/UserAuthContext';
import { connectAuthEmulator } from "firebase/auth";

const Home = () => {

  const { user } = useUserAuth();

  useEffect(() => {
    console.log("Home page");
  }, [])

  return (
    <>
      <NavBar collection="users" docID={user.email}/>
      <h2 className="page-title text-center">Private posts</h2>
      <div>
        <UploadForm collection="users" docID={user.email}/>
        <ImageGrid collection="users" docID={user.email}/>
      </div>
    </>
  );
};

export default Home;
