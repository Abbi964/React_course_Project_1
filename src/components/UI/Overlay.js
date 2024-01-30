import React from "react";
import './Overlay.css';

function Overlay(props) {
  return (
    <div onClick={()=>props.onClickOkay()} className="overlay">
      <div className="overlay-content">
        <div className="overlay_h2">
          <h2>Invalid Input</h2>
        </div>
        <div style={{marginLeft : '10px'}}>
          <h4>{props.error}</h4>
        </div>
        <button onClick={()=>props.onClickOkay()} className="button" type="button">
          Okay
        </button>
      </div>
    </div>
  );
}

export default Overlay;
