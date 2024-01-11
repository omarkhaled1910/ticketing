import React, { useState } from "react";
import SaceCancel from "../SaveCancel/SaceCancel";
import { TextField } from "@mui/material";

const EditTodo = ({ todo, savefn, cancelfn, parentId }: any) => {
  const [newVal, setNewVal] = useState(todo.name);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,
      }}
    >
      <TextField
        value={newVal}
        onChange={(e) => setNewVal(e.target.value)}
        fullWidth
      />
      <SaceCancel
        savefn={() => savefn(newVal, todo.id, parentId)}
        cancelfn={cancelfn}
      />
    </div>
  );
};

export default EditTodo;
