import React, { Component, Fragment } from 'react';

import {
  Wrapper,
  Item,
  ItemWrap,
  DropZoneArea
} from './styled';

class Draggy extends Component {
  state = {
    items: [],
    selectedItem: null,
    showPlaceFor: null,
    isDragging: false,
    showTopZone: false,
  }

  componentDidMount() {
    this.setState({ items: this.props.items });
    document.addEventListener('dragend', this.onDragEnd);
    document.addEventListener('dragstart', this.onDragStart);
    document.addEventListener('dragenter', this.onDragEnter);
    document.addEventListener('dragleave', this.onDragLeave);
  }

  onDragStart = (event, id) => {
    this.setState({ selectedItem: id, isDragging: true });
  }

  onDragEnd = () => {
    const {
      items,
      selectedItem: from,
      showPlaceFor: to
    } = this.state;
    console.log(this.props.name, { from, to });
    const itemFrom = items.find(i => i.id === from);
    const itemTo = items.find(i => i.id === to);
    this.setState(prevState => ({
      isDragging: false,
      showPlaceFor: null,
      showTopZone: false,
      items: from !== to ? [
        ...prevState.items.filter(i => i.id !== from && i.id !== to),
        {
          ...itemFrom,
          id: to
        },
        {
          ...itemTo,
          id: from
        }
      ] : prevState.items
    }));
  }

  onDragEnter = (event, id) => {
    if (this.state.isDragging) {
      this.setState({
        showPlaceFor: id,
        showTopZone: event.target.parentNode.getBoundingClientRect().top < event.target.getBoundingClientRect().height
      });
    } else {
      this.setState({
        selectedItem: id,
        showPlaceFor: id,
        showTopZone: event.target.parentNode.getBoundingClientRect().top < event.target.getBoundingClientRect().height
      });
    }
  };

  onDragLeave = (event) => {
    if (!event.target.parentNode.contains(event.target)) {
      this.setState({
        showPlaceFor: null
      });
    }
  }

  render() {
    const {
      items,
      showPlaceFor,
      isDragging,
      selectedItem,
      showTopZone
    } = this.state;
    return (
      <Wrapper>
        {items.sort((a, b) => a.id - b.id).map(item => (
          <Fragment key={item.id}>
            {showTopZone && (showPlaceFor === item.id) && (
              <DropZoneArea />
            )}
            <ItemWrap
              // onDragEnter={(e) => this.onDragEnter(e, item.id)}
              // onDragLeave={this.onDragLeave}
              draggable
              // onDragStart={(e) => this.onDragStart(e, item.id)}
              // onDragEnd={this.onDragEnd}
              isDragging={isDragging && (selectedItem === item.id)}
            >
              <Item>
                {item.name}
              </Item>
            </ItemWrap>
            {!showTopZone && (showPlaceFor === item.id) && (
              <DropZoneArea />
            )}
          </Fragment>
        ))}
      </Wrapper>
    )
  }
}

export default Draggy;
