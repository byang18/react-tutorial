import React, { Component } from 'react';

class AddBar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  submitItem = () => {
    const { value } = this.state;
    const { addItem } = this.props;
    addItem(value);
    this.setState({ value: '' });
  }

  render() {
    const { value } = this.state;

    return (
      <div id="add-bar">
        <input onChange={this.handleChange} value={value} />
        <button
          id="todo-button"
          type="submit"
          onClick={this.submitItem}
        >
        +
        </button>
      </div>
    );
  }
}


export default AddBar;
