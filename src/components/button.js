import React, { Component } from 'react';
import {Button } from 'reactstrap';
import PropTypes from "prop-types";
class ButtonItem extends React.Component {

  handleClick=()=>{
    this.props.handleClick(this.props.value)
  }
render()
{
  return(
<Button color="primary" size="lg" block onClick={this.handleClick}>{this.props.value}</Button>)}
}

ButtonItem.propTypes = {
  value:PropTypes.string,
  handleClick: PropTypes.func,
};
export default ButtonItem;
