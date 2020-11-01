import React from "react";
import Search from "../Search";


const Header = (props) => {
  return (
    <div>
      <h1>Employee Directory</h1>
      <h6>
       Enter first name of employee
      </h6>
      <input
        type="text"
        name="search"
        placeholder="Search by First Name"
        onChange={props.handleInput}
      />
      <Search />
    </div>
  );
};

export default Header;