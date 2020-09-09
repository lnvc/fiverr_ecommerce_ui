// color palette: https://coolors.co/7400b8-6930c3-5e60ce-5390d9-4ea8de-48bfe3-56cfe1-64dfdf-72efdd-80ffdb

import React from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

import Sidebar from './Sidebar'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){

  }

  render() {
    return(
      <Container fluid>
        <Row>
          <Col xs={2} className="position-fixed" style={{ height: '100%', backgroundColor: '#5e60ce' }}>
            <Sidebar userType={1}></Sidebar>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;