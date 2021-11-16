import React from 'react';

class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
          name: '',
          email: '',
          password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
      event.preventDefault();
      const { name, email } = this.state;
      alert(`Olá ${ name }, registro efetuado com o email: ${ email } !`)
  }

  render() {
    const { name, email, password  } = this.state;
    return (
    <section className="register-form">
    <h1>Register</h1>
    <form onSubmit={ this.handleSubmit }>
        <label htmlFor="name">
            <p>Name:</p>
            <input
            value= { name }
            onChange= { this.handleChange } 
            type="name"
            name="name"
            id="name"
            />
        </label>
        <br />
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
        <button type="submit"> Fazer cadastro </button>
    </form>
    </section>
    );
}
}

export default RegisterForm;