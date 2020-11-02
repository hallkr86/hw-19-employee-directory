import React from "react";
//import "./style.css";


function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="employee">Employee Name:</label>
        <input
          value={props.value}
          onChange={props.handleInputChange}
          name="search"
          //list="employees"
          type="text"
          className="form-control"
          placeholder="Type in an employee name"
          id="search"
          
        />
        <datalist id="employees">
          {props.employees.map(employee => (
            <option value={employee.name.last} key={employee.name.first} />
          ))}
        </datalist>
        <button onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;