import React, { Component } from "react";
import API from "../utils/API";
import Container from "./Container";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";


import Alert from "./Alert";


class Search extends Component {
    state = {
        search: "",
        employees: [],
        filteredEmployees: [],
        error: ""
    };

    componentDidMount() {
      console.log("componentMounted");
        API.getEmployee()
        .then(res => this.setState({ employees: res.data.results }))
        .catch(err => console.log(err)); 
    }

    handleInputChange = event => {
      this.setState({ search: event.target.value });
    };
        
           
        
       


    handleFormSubmit = event => {
    event.preventDefault();
    API.getEmployees(this.state.search)
        .then(res => {
        if (res.data.status === "error") {
            throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
        })
        .catch(err => this.setState({ error: err.message }));
    };
    render() {
        return (
          <div>
            <Container style={{ minHeight: "80%" }}>
              <h1 className="text-center">Search By Empolyee</h1>
              <Alert
                type="success"
                style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
              >
                {this.state.error}
              </Alert>
              <SearchForm
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                employees={this.state.employees}
              />
              <SearchResults results={this.state.results} />
            </Container>
          </div>
        );
      }
};

export default Search;