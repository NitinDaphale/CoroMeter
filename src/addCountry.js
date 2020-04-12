import React from "react";
import { TextField, Button } from "@material-ui/core";

export default function AddCountry({ onSubmit, onCancel }) {
  return (
    <div>
      <TextField />
      <TextField />
      <br />
      <Button onClick={onSubmit}>Ok</Button>
      <Button onClick={onCancel}>Cancel</Button>
    </div>
  );
}
