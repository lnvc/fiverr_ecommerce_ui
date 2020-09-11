import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Sidebar from './Sidebar';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state={};
    }

    render() {
        return(
            <Container fluid>
                <Row>
                    <Col className="position-fixed" style={{ height: '100%', width: '15%', backgroundColor: '#5e60ce' }}>
                        <Sidebar userType={1}></Sidebar>
                    </Col>
                    <Col className="position-absolute" style={{ height: '100%', width: '85%', right: '0px' }}>
                        <LoginButton />
                        <LogoutButton />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Dashboard;