import React, { Component } from 'react'
import { signUp } from './todo-api';

export default class AuthPage extends Component {

    state = {
        signInEmail: '',
        signInPassword: '',
        signUpEmail: '',
        signUpPassword: ''
    }

    handleSignUp = async (e) => {
        e.preventDefault();

        const user = await signUp({
            email: this.state.signUpEmail,
            password: this.state.signUpPassword
        });

        console.log(user.body)
    }

    render() {
        return (
            <div>
                <p>SIGN IN</p>
                <form>
                    <label>
                        <input placeholder="E-mail" onChange={e => this.setState({ signInEmail: e.target.value })} value={this.state.signInEmail} />
                        <input placeholder="Password" onChange={e => this.setState({ signInPassword: e.target.value })} value={this.state.signInPassword} />
                        <br />
                        <button>SUBMIT</button>
                    </label>
                </form>
                <p>SIGN UP</p>
                <form onSubmit={this.handleSignUp}>
                    <label>
                        <input placeholder="E-mail" onChange={e => this.setState({ signUpEmail: e.target.value })} value={this.state.signUpEmail} />
                        <input placeholder="Password" onChange={e => this.setState({ signUpPassword: e.target.value })} value={this.state.signUpPassword} />
                        <br />
                        <button>SUBMIT</button>
                    </label>
                </form>
            </div>
        )
    }
}
