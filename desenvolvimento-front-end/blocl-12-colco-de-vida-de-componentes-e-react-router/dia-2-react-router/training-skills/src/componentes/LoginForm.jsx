import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
          email: '',
          password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleChange(event){
    this.setState({
      email: event.target.value,
    });
  }

  handleChangePassword(event){
    this.setState({
      password: event.target.value,
    });
  }
  render() {
    const { email } = this.state;
    const { password } = this.state;
    return (
    <section className="login-form">
    <h1>Login</h1>
    <form>
        <label htmlFor="email">
            Email:
            <input
            value= { email }
            onChange= { this.handleChange } 
            type="email"
            name="email"
            id="email"
            />
        </label>
        <br />
        <label htmlFor="password">
            Password:
            <input
            value= { password }
            onChange= { this.handleChangePassword } 
            type="password"
            name="password"
            id="password"
            />
        </label>
        <br />
        <button type="submit"> Fazer login </button>
    </form>
    </section>
    );
}
}

export default LoginForm;