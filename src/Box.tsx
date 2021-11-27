import React from "react";
import { IData } from "./App";

interface IBox {
  resource: IData;
}
function Box({ resource }: IBox) {
  return (
    <div className="box">
      <h3>{resource.title}</h3>
      <p>{resource.category}</p>
      <h5>{resource.description}</h5>
      <div className="center_image">
        <img src={resource.image} alt="images" />
      </div>
    </div>
  );
}

export default Box;
