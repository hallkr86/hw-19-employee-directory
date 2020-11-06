import React from 'react';
//import "./style.css";

function SearchResults(props) {
  return (

    // add a conditional render statement 
    // is there data in 'filteredEmployees'? if yes show filtered dataset
    // if NO show all employees
    
    <ul className='list-group search-results'>
      {props.employees.length &&
        props.employees.map((employee) => (
          <li key={employee.id} className='list-group-item'>
            <img
              alt='result.title'
              src={employee.picture.large}
              className='img-fluid'
            />
            <h6>First Name: {employee.name.first}</h6>
            <h6>Last Name: {employee.name.last}</h6>
            <h6>ID: {employee.login.uuid}</h6>
            <h6>Email: {employee.email}</h6>
            <h6>Phone: {employee.phone}</h6>
            <h6>Age: {employee.dob.age}</h6>
          </li>
        ))}
    </ul>
  );
}

export default SearchResults;