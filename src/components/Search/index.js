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

    if(!value.length || (value.length >= 2)) {
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

  handleChange = e => this.setState({ value: e.target.value });

  render() {
    return (
      <div style={{
        width: '40%',
        margin: '15px'
      }}>
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
      </div>
    )
  }
}

export default Search;
