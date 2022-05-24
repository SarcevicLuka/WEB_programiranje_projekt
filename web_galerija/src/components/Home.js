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
        <ImageGrid />
      </div>
    </>
  );
};

export default Home;
