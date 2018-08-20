import React from 'react';
import { Container, Row, Col,Button ,Input} from 'reactstrap';
import ButtonItem from "./button.js"
import PropTypes from "prop-types";
class ButtonPanel extends React.Component {
handleClick=(value)=>{
  this.props.handleClick(value)
}
  render(){
    return(
<div>
        <Row>
          <Col  lg="4" md="4" sm="4" xs="4"> <ButtonItem value={1} handleClick={this.handleClick}/></Col>
                    <Col  lg="4" md="4" sm="4" xs="4"> <ButtonItem value={2} handleClick={this.handleClick}/></Col>
                              <Col  lg="4" md="4" sm="4" xs="4"><ButtonItem value={3} handleClick={this.handleClick}/></Col>
        </Row>
        <br/>
        <Row>
          <Col sm="4" xs="4"><ButtonItem value={4} handleClick={this.handleClick}/></Col>
                    <Col sm="4" xs="4"> <ButtonItem value={5} handleClick={this.handleClick}/></Col>
                              <Col sm="4" xs="4"><ButtonItem value={6} handleClick={this.handleClick}/></Col>
        </Row>
        <br/>

        <Row>
          <Col sm="4" xs="4"><ButtonItem value={7} handleClick={this.handleClick}/></Col>
                    <Col sm="4" xs="4"><ButtonItem value={8} handleClick={this.handleClick}/></Col>
                              <Col sm="4" xs="4"><ButtonItem value={9} handleClick={this.handleClick}/></Col>
        </Row>
<br/>
        <Row>
          <Col sm="8" xs="8"> <ButtonItem value={0} handleClick={this.handleClick}/></Col>
                    <Col sm="4" xs="4"><ButtonItem value={"CE"} handleClick={this.handleClick}/></Col>
        </Row>
</div>
    )
  }
}
ButtonPanel.propTypes = {
  handleClick: PropTypes.func,
};
export default ButtonPanel;
