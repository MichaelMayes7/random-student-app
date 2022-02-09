import React from 'react';
import Button from './components/Button';
import Student from './components/Student';
import Toggle from './components/Toggle';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [{
        name: 'Bob Ross',
        img: 'https://media.giphy.com/media/rYEAkYihZsyWs/giphy.gif'
      },
      {
        name: 'Mr Rogers',
        img: 'https://media.giphy.com/media/x0npYExCGOZeo/giphy.gif'
      },
      {
        name: 'Carrie Fisher',
        img: 'https://media.giphy.com/media/CXU8axmXoPHUY/giphy.gif'
      }],
      pickFromAll: true,
      pickedStudent: null,
    }
  }

  pickRandomStudent = () => {
    this.setState(() => ({
      pickedStudent: this.state.students[Math.floor(Math.random() * this.state.students.length)]
    }))
  }

  togglePickingStrategy = () => {
    this.setState(prev => ({ 
      pickFromAll: !prev.pickFromAll,
    }))
  }

  render() {
    return (
    <div className="App">
     {this.state.pickFromAll && <Student student={this.state.pickedStudent}/>}
      <Button handleClicked={this.pickRandomStudent}/>
      <Toggle toggleHandler={this.togglePickingStrategy}/>
    </div>
  );
  }
 
}


