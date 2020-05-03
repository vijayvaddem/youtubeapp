import React, { Component } from "react";
import { Paper, TextField } from "@material-ui/core";

class SearchBar extends Component {
  state = {
    searchTerm: "",
  };

  render() {
    return (
      <Paper elevation={6} style={{ padding: "25px" }}>
        <form onSubmit={this.handleSubmit}>
          <TextField
            fullWidth
            label="Search videos..."
            onChange={this.handleChange}
          ></TextField>
        </form>
      </Paper>
    );
  }

  handleSubmit = (event) => {
    //console.log("Submit done");
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(searchTerm);
    event.preventDefault();
  };

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };
}

export default SearchBar;
