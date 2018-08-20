import React, { Component } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from "./Display.js"
import { Container, Row, Col,Button ,Input} from 'reactstrap';

class App extends Component {

  constructor(props) {
  super(props);
  this.state = {
    value:""

  };
}
handleClick=(value)=>
{
  if(value=="CE")
    this.setState({value:""})
    else
  this.setState({value:this.state.value+value})
}
  render() {

    return (
      <Container>
      <br/><br/><Row><Col lg={{ size:6, offset: 3 }} md={{ size:8, offset: 2 }} sm={{ size:8, offset: 2 }}>
          <Row> <Col> <Display value={this.state.value}/></Col></Row>
          <br/>
        <ButtonPanel handleClick={this.handleClick}/></Col></Row>
      </Container>
    );
  }
}

export default App;
