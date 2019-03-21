import React from "react";
import {
  GridLoader,
  HashLoader
} from "react-spinners";

const Spinner = () => (
  <div className="spinner">
    <HashLoader color={"#4FC95B"} size={80} margin={"3px"} />
  </div>
);

export default Spinner;
