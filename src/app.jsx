import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };
  //habit : { id:1, name:'Reading', count: 0 }
  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        // 새 obj 생성하고 count만 변경
        return { ...habit, count: habit.count + 1 };
      } else {
        return item;
      }
    });
    this.setState({ habits });

    // 첫번째 방식
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits[index].count++;
    // this.setState({ habits: habits });

    // 똑같은 구문
    //this.setState({ habits });

    // 이렇게 직접적으로 state건드리지 말기
    // habit.count++;
    // this.setState(this.state);
  };
  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        // 새 obj 생성하고 count만 변경
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      } else {
        return item;
      }
    });
    this.setState({ habits });
  };
  handleDelete = (habit) => {
    //console.log(`Del ${habit.name}`);
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };
  handleAdd = (name) => {
    const habits = [
      ...this.state.habits,
      { id: Date.now(), name: name, count: 0 },
    ];
    this.setState({ habits });
  };
  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    this.setState({ habits });
  };
  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
      // const name = 'kim';
      // return (
      //   // <>
      //   //   <h1>Hello :) good! {name}</h1>
      //   //   <h1>Hello :) not good! {name}</h1>
      //   //   {name && <h1>hello {name}</h1>}
      //   //   {
      //   //     ['asd','dsadsad'].map(item => (
      //   //       <h1>{item}</h1>
      //   //     ))
      //   //   }
      //   // </>
      // );
    );
  }
}

export default App;
