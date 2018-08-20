import React, { Component } from 'react';
import {Input } from 'reactstrap';
import PropTypes from "prop-types";
class Display extends React.Component {


render()
{
  return(
<Input type="number" name="dis" id="exampleEmail" placeholder="0" value={this.props.value} bsSize="lg" disabled/>)}
}

Display.propTypes = {
  value: PropTypes.string,
};
export default Display;
