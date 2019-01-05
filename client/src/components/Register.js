import React from 'react';
import {AuthConsumer} from '../providers/AuthProvider';
import styled from 'styled-components';

class Register extends React.Component {
    state = {email: '', password: '', passwordConfirmation: ''}

    handleChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {email, password, passwordConfirmation } = this.state;
        const {auth: {handleRegister, }, history} = this.props;
        if(password === passwordConfirmation) {
            handleRegister({email, password, passwordConfirmation}, history);
        } else {
            alert('Passwords Do Not Match!');
        }
    }

    render() {
        const {email, password, passwordConfirmation} = this.state;
        return(
            <Form onSubmit={this.handleSubmit}>
                <input 
                    type = "email"
                    required
                    placeholder = "Email"
                    autoComplete = "email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                />
                <input 
                    type = "password"
                    required
                    placeholder = "Password"
                    autoComplete = "password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                />
                <input 
                    type = "password"
                    required
                    placeholder = "Password Confirmation"
                    name="passwordConfirmation"
                    value={passwordConfirmation}
                    onChange={this.handleChange}
                />
                <input 
                    type="submit"
                    value="Login"
                />
            </Form>
        )
    }
}

export default class ConnectedRegister extends React.Component {
    render() {
        return(
            <AuthConsumer>
                {auth => <Register {...this.props} auth={auth}/>}
            </AuthConsumer>
        )
    }
}


const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;