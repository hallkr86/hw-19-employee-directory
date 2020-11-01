import React from "react";
//import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {this.props.employees.map(employee => (
        <li key={employee.id} className="list-group-item">
          <img alt="result.title" src={employee.images.original.url} className="img-fluid" />
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;