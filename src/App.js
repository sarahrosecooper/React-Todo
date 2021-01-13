import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import "./styles.scss";

const toDoState = [
  {
    task: "Clean cat litter box",
    id: Date.now(),
    completed: false
  },
  {
    task: "Put monthly flea medication",
    id: Date.now(),
    completed: false
  },
  {
    task: "Research healthier cat food",
    id: Date.now(),
    completed: false
  },
  {
    task: "Read 50 pages of Kindle",
    id: Date.now(),
    completed: false
  },
  {
    task: "Organize room",
    id: Date.now(),
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      toDoState: toDoState
    };
  }

  addItem = (itemName) => {
    this.setState({
      toDoState: [
        this.state.toDoState,
        { task: itemName, id: Date.now(), completed: false }
      ]
    });
  };

  toggleItem = (itemId) => {
    this.setState({
      toDoState: this.state.toDoState.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  clearCompleted = () => {
    this.setState({
      toDoState: this.state.toDoState.filter((item) => {
        return !item.completed;
      })
    });
  };
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Daily Todo!</h2>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          clearCompleted={this.clearCompleted}
          toggleItem={this.toggleItem}
          toDoState={this.state.toDoState}
        />
      </div>
    );
  }
}

export default App;
