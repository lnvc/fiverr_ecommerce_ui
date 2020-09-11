import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useAuth0 } from "@auth0/auth0-react";


class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state={};
    }

    render() {
        return (
            <Container fluid>
                <LoginButton />
                <LogoutButton />
            </Container>
        );
    }
}

export default LoginForm;