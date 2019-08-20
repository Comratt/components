import React, { Component } from 'react';

import SearchIcon from './SearchIcon';

import {
  Input,
  Group,
  Label,
  Bar,
  Button
} from './styled';

class Search extends Component
{

  state = {
    searchValue: ''
  }

  handleChange = e => this.setState({ searchValue: e.target.value });

  render() {
    return (
      <div>
        <Group>
          <SearchIcon height="20px" fill="#fff" />
          <Input
            type="text"
            value={this.state.searchValue}
            onChange={this.handleChange}
          />
          <Label>Enter some</Label>
          <Bar />
          <Button>Submit</Button>
        </Group>
      </div>
    )
  }
}

export default Search;
