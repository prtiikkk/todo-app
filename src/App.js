import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/learning-components/FirstComponent'
import SecondComponent from './components/learning-components/SecondComponent';
import ThirdComponent from './components/learning-components/ThirdComponent';
import Counter from './components/counter/Counter';
import Todo from './components/todo/TodoApp';

import { Component } from 'react';

function App() {
  return (
    <div className="App">
      {/*<Counter></Counter>*/}
      <Todo></Todo>      
    </div>

  );
}

class LearningComponents extends Component {
  render() {
    return (
      <div className="LearningComponents">
        My Hello world
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
      </div>

    );
  }
}





export default App;

