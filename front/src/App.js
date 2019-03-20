import React, { Component } from 'react';
import './App.css';
import Employee from './Employee/Employee';
import Outcome from './Outcome/Outcome';
import Event from './Event/Event';
import Income from './Income/Income';


class App extends Component {
  state = {
    employees: [
      { first_name: 'name1', last_name: 'surname1', pesel: 10000000000, position: 'position1', salary: 1000},
      { first_name: 'name2', last_name: 'surname2', pesel: 20000000000, position: 'position2', salary: 2000},
      { first_name: 'name3', last_name: 'surname3', pesel: 30000000000, position: 'position3', salary: 3000}
    ],
    events: [
      { name: 'event1', description: 'description1', datetime: '2019-03-20 21:00' },
      { name: 'event2', description: 'description2', datetime: '2020-04-21 22:00' },
      { name: 'event3', description: 'description3', datetime: '2021-05-22 23:00' }
    ],
    incomes: [
      { name: 'income1', sum: 100, date: '2019-03-20' },
      { name: 'income2', sum: 200, date: '2020-04-21' },
      { name: 'income3', sum: 300, date: '2021-05-22' }
    ],
    outcomes: [
      { name: 'outcome1', sum: 100, date: '2019-03-20' },
      { name: 'outcome2', sum: 200, date: '2020-04-21' },
      { name: 'outcome3', sum: 300, date: '2021-05-22' }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>ManageUrEmployees</h1>
        <Employee
          first_name={this.state.employees[0].first_name}
          last_name={this.state.employees[0].last_name}
          pesel={this.state.employees[0].pesel}
          position={this.state.employees[0].position}
          salary={this.state.employees[0].salary}
        />
        <Event
          name={this.state.events[0].name}
          description={this.state.events[0].description}
          datetime={this.state.events[0].datetime}
        />
        <Income
          name={this.state.incomes[0].name}
          sum={this.state.incomes[0].sum}
          date={this.state.incomes[0].date}
        />
      </div>
    );
  }
}

export default App;
