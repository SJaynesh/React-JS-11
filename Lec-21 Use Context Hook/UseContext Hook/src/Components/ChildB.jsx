import React, { useContext } from "react";
import ChildC from "./ChildC";
import { nameContext } from "../App";

export default function ChildB() {
  const nameB = useContext(nameContext);
  return (
    <>
      <p>Child B Component {nameB}</p>

      <ChildC />
    </>
  );
}
