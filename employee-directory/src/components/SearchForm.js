import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="employee"
          list="employees"
          type="text"
          className="form-control"
          placeholder="Search For an Employee"
          id="employee"
        />
        <datalist id="employees">
            {props.breeds.map(employee => (
                <option value={employee} key={employee} />
            ))}
        </datalist>
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;