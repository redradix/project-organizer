import React from "react";

const CustomSelect = props => (
  <React.Fragment>
    <select
      name={props.selectName}
      onChange={props.changeHandler}
      value={props.value}
    >
      <option />
      {props.items.map(item => (
        <option value={item} key={item}>
          {item}
        </option>
      ))}
    </select>
  </React.Fragment>
);

export default CustomSelect;
