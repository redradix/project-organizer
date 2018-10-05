import React from "react";
import PropTypes from "prop-types";

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

CustomSelect.propTypes = {
  selectName: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  value: PropTypes.string
};

export default CustomSelect;
