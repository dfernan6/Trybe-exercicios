import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
          email: '',
          password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value,
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
      event.preventDefault();
      const { email } = this.state;
      alert(`Login efetuado com o email: ${ email } !`)
  }

  render() {
    const { email, password  } = this.state;
    return (
    <section className="login-form">
    <h1>Login</h1>
    <form onSubmit={ this.handleSubmit }>
        <label htmlFor="email">
            <p>Email:</p>
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
            <p>Password:</p>
            <input
            value= { password }
            onChange= { this.handleChange } 
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