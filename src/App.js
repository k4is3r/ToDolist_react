import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
import './App.css';

class App extends Component {
  state = {
    todos: [{
      id: uuid.v4(),
      title: 'Saca la basura',
      completed: false
    },
    {
      id: uuid.v4(),
      title: 'Almuerzo con companeros',
      completed: false
    },
    {
      id: uuid.v4(),
      title: 'Reunion con Boss',
      completed: false
    },
    {
      id: uuid.v4(),
      title: 'Repasar Pythom',
      completed: false
    },
    {
      id: 5,
      title: 'Lavar ropa',
      completed: false
    }
    ]
  }

  //toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  //delete item
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  // add todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        </div>
      </div>
    );
  }
}

export default App;
