import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <input
        onChange={this.props.onChange}
        value={this.props.input}
        style={{ width: "100%" }}
      />
    );
  }
}

export default SearchBar;
