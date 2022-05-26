import React from "react";
import ImageGrid from "./ImageGrid";
import UploadForm from "./UploadForm";
import NavBar from "./NavBar";

const Home = () => {

  return (
    <>
      <NavBar collection="users"/>
      <div>
        <UploadForm collection="users"/>
        <ImageGrid collection="users"/>
      </div>
    </>
  );
};

export default Home;
