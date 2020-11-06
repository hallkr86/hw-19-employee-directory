import React, { Component } from 'react';
import API from '../utils/API';
import Container from './Container';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

import Alert from './Alert';

class Search extends Component {
  state = {
    search: '',
    employees: [],
    filteredEmployees: [],
    error: '',
  };

  componentDidMount() {
    console.log('componentMounted');
    API.getEmployee()
      .then((res) => this.setState({ employees: res.data.results, filteredEmployees: res.data.results }))
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    
      const searchedEmployee = this.state.employees.filter((employee) => {
        return employee.name.first.slice(0, this.state.searchTerm.name.length).toLowerCase() === this.state.searchTerm.toLowerCase()
      })

      this.setState({ filteredEmployees: searchedEmployee })
   
    API.getEmployee(this.state.search)
      .then((res) => {
        if (res.data.status === 'error') {
          throw new Error(res.data.message);
        }
        console.log({ res });
        this.setState({ employees: res.data.results, error: '' });

      })
      .catch((err) => this.setState({ error: err.message }));
  };
  render() {
    return (
      <div>
        <Container style={{ minHeight: '80%' }}>
          <h2 className='text-center'>Search By Empolyee</h2>
          <Alert
            type='success'
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}>
            {this.state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            employees={this.state.employees}
          />
          
          <SearchResults employees={this.state.employees} />
        </Container>
      </div>
    );
  }
}

export default Search;