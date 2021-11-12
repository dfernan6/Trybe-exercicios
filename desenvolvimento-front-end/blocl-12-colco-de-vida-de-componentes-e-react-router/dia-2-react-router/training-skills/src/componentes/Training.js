import React from 'react';

class Training extends React.Component {
  render() {
    const arrayObj = [
    {
    name: 'Danilo',
    lastName: 'Fernandes'
    },
    'Se-vira'
];
    return (
    <section>
    <p>{ arrayObj[1] }</p>
    </section>
    )
  }
}

export default Training;