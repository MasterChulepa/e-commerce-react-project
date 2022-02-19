import React, { Component } from "react";
import './sign-up.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
export default class SignUp extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirmPassowrd: ''

    }
    handleSubmit = async e => {
        e.preventDefault();
        const {name, email, password, confirmPassowrd} = this.state;
        if (password !== confirmPassowrd){
            alert("Passwords don't match");
            return
        }else{
            try{
                const {user} = await auth.createUserWithEmailAndPassword(email, password);
                await createUserProfileDocument(user, {name});        
                this.setState({ email: '', password: '', name: '', confirmPassowrd: '' });

            }catch(error){
                console.error(error)
            }
        }
    }
    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }
    render() {
        const {name, email, password, confirmPassowrd} = this.state;
        return (
            <div className="sign-up">
                <h2>I don't have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-in-form" onSubmit={this.handleSubmit}>
                    <FormInput name="name" type="text" required
                        value={name}
                        handleChange={this.handleChange}
                        label="Name" />
                    <FormInput name="email" type="email" required
                        value={email}
                        handleChange={this.handleChange}
                        label="Email" />
                    <FormInput name="password" type="password" required
                        value={password}
                        handleChange={this.handleChange}
                        label="Password" />
                    <FormInput name="confirmPassowrd" type="password" required
                        value={confirmPassowrd}
                        handleChange={this.handleChange}
                        label="Confirm your password" />
                    <CustomButton type="submit" >SIGN UP</CustomButton>
                </form>


            </div>
        )
    }
}
