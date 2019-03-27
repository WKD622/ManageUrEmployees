import React, { Component } from 'react';
import './App.css';
import Employee from './Employees/Employee/Employee';
// import Outcome from './Outcome/Outcome';
import Event from './Events/Event/Event';
import Income from './Incomes/Income/Income';
import axios from 'axios'


class App extends Component {
  state = {
    employees: [
      // { first_name: 'name1', last_name: 'surname1', pesel: 10000000000, position: 'position1', salary: 1000},
      // { first_name: 'name2', last_name: 'surname2', pesel: 20000000000, position: 'position2', salary: 2000},
      // { first_name: 'name3', last_name: 'surname3', pesel: 30000000000, position: 'position3', salary: 3000}
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
    ],
    showData: false
  };

  deleteEmployeeHandler = (employeeIndex) => {
    const employees = this.state.employees.slice();
    employees.splice(employeeIndex, 1);
    this.setState({employees: employees})
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showData;
      this.setState({showData: !doesShow});
  }

  componentDidMount(){
    axios.get('http://127.0.0.1:8000/api/employees/')
      .then(response => {
        console.log(response)
        this.setState({
          employees: response.data.slice(0,10)
        })
      })
    axios.get('http://127.0.0.1:8000/api/income/')
      .then(response => {
        console.log(response)
        this.setState({
          incomes: response.data.slice(0,10)
        })
      })
    axios.get('http://127.0.0.1:8000/api/outcome/')
      .then(response => {
        console.log(response)
        this.setState({
          outcomes: response.data.slice(0,10)
        })
      }) 
    axios.get('http://127.0.0.1:8000/api/events/')
      .then(response => {
        console.log(response)
        this.setState({
          events: response.data.slice(0,10)
        })
      })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let dataToShow = null;

    if ( this.state.showData ) { 
      dataToShow  = (
        <div>
          <h1>Employees</h1>
          {this.state.employees.map((employee, index) => {
            return <Employee 
              key={employee.pesel}
              first_name={employee.first_name}
              last_name={employee.last_name}
              pesel={employee.pesel}
              position={employee.position}
              salary={employee.salary}
              index={index}
              handler={this.deleteEmployeeHandler}
            /> 
          })}
    
          <h1>Events</h1>
          {this.state.events.map((event, index) => {
            return <Event
              key={event.id}
              name={event.name}
              description={event.description}
              datetime={event.datetime}
            />
          })}

          <h1>Incomes</h1>
          {this.state.incomes.map((income, index) => {
            return <Income
              key={income.id}
              name={income.name}
              sum={income.sum}
              date={income.date}
            />
          })}
            
          />
          <h1>Outcomes</h1>
          {this.state.outcomes.map((outcome, index) => {
            return <Income
              key={outcome.id}
              name={outcome.name}
              sum={outcome.sum}
              date={outcome.date}
            />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>ManageUrEmployees</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Hide
        </button>
        {dataToShow}
      </div>
    );
  }
}

export default App;
