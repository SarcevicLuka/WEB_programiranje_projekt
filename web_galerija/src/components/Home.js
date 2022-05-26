import React from "react";
import ImageGrid from "./ImageGrid";
import UploadForm from "./UploadForm";
import NavBar from "./NavBar";
import { useUserAuth } from '../context/UserAuthContext';

const Home = () => {

  const { user } = useUserAuth();

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
