import React from "react";
import ImageGrid from "./ImageGrid";
import UploadForm from "./UploadForm";
import NavBar from "./NavBar";

const Home = () => {

  return (
    <>
      <NavBar />
      <div>
        <UploadForm />
        <ImageGrid collection="users"/>
      </div>
    </>
  );
};

export default Home;
