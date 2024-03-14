import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent, SelectProps } from "@mui/material/Select";

const CustomSelect = (
  props: SelectProps & { options: { label: string; value: string }[] }
) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">
        {props.placeholder || ""}
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label={props.placeholder || ""}
        {...props}
      >
        {props.options.map((item) => (
          <MenuItem value={item.value}>{item.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
