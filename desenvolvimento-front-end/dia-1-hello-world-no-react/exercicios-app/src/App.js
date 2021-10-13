import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    const Task = (value) => {
      return (
        <li>{value}</li>
      );
    }
  return <ul> <Task value={ 3 }/> </ul> 
}
}
export default App;
