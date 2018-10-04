import React from "react";

const ListView = props => (
  <ul>
    {props.items &&
      props.items.map(item => (
        <li key={item.id}>
          {item[props.mainProperty]}
          <button onClick={props.deleteHandler} data-id={item.id}>
            Delete
          </button>
        </li>
      ))}
  </ul>
);

export default ListView;
