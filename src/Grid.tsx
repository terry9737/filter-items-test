import React from "react";
import { IData } from "./App";
import Box from "./Box";
import "./styles/grid.scss";
interface IGrid {
  data: IData[];
}
function Grid({ data }: IGrid) {
  return (
    <div className="grid_main">
      {data.map((x) => {
        return <Box resource={x} />;
      })}
    </div>
  );
}

export default Grid;
