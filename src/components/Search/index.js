import React, { Component } from 'react';

import SearchIcon from './SearchIcon';

import {
  Input,
  Group,
  Bar,
  Button
} from './styled';

class Search extends Component
{

  interval = 1000;

  state = {
    value: '',
    timer: null,
  }

  doSearch = () =>  {
    const { value } = this.state;

    if(!value.length || (value.length >= 3)) {
      this.props.onSubmit(value);
      clearTimeout(this.state.timer);
      this.setState({ timer: null });
    }
  };

  onKeyDown = () => clearTimeout(this.state.timer);

  onKeyUp = () => {
    clearTimeout(this.state.timer);
    this.setState({ timer: setTimeout(this.doSearch, this.interval) });
  };

  formSubmit = e => {
    e.preventDefault();
    this.doSearch();
  }

  handleChange = e => this.setState({ value: e.target.value });

  render() {
    return (
      <form
        style={{
          width: '90%',
          margin: '15px'
        }}
        onSubmit={this.formSubmit}
      >
        <Group>
          <SearchIcon height="18px" fill="#fff" />
          <Input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            onKeyDown={this.onKeyDown}
            onKeyUp={this.onKeyUp}
            placeholder={this.props.placeholder}
          />
          <Bar />
          <Button>SUCHEN</Button>
        </Group>
      </form>
    )
  }
}

export default Search;
