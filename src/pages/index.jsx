import React from "react";
import "../styles/home.scss";
import CustomCursor from "../CustomCursor";
import CursorManager from "../CustomCursor/CursorManager";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

const Index = () => {
  return (
    <CursorManager>
      <div className="main-container">
        <CustomCursor />
        <div className="hover-left" />
        <div className="hover-right" />
        <LeftContainer />
        <RightContainer />
        <h1 className="center-text">CINEMATOGRAPHY</h1>
      </div>
    </CursorManager>
  );
};

export default Index;
