import React, { Component } from "react";
import './sign-in.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

export default class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleSubmit = e => {
        e.preventDefault();
        this.setState({ email: '', password: '' })
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    render() {
        const { email, password } = this.state;
        return (
            <div className="sign-in">
                <h2>I alrady have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" required
                        value={email}
                        handleChange={this.handleChange}
                        label="Email" />
                    <FormInput name="password" type="password" required
                        value={password}
                        handleChange={this.handleChange}
                        label="Password" />
                    <div className="button-container">
                        <CustomButton type="submit" >SIGN IN</CustomButton>
                        <CustomButton isGoogleButton onClick={signInWithGoogle} >SIGN IN WITH GOOGLE</CustomButton>

                    </div>
                </form>
            </div>
        )
    }

}