import React from "react";

const DropdownMenu = (props) => {
  return (
    <div className="dropdown-menu">
      <ul>
        {props.list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
