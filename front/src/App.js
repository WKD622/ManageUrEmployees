import React, {Component} from 'react';
import './App.css';
import Employee from './Employee/Employee';
import axios from 'axios';


class App extends Component {
    state = {
        hiredEmployees: [],
        firedEmployees: [],
        showData: false
    };

    deleteEmployeeHandler = (employeePesel) => {
        axios.get('http://127.0.0.1:8000/api/employees/' + employeePesel + '/fire/')
            .then(response => {
                let newHiredEmployees = this.state.hiredEmployees.filter(employee => employee.pesel !== employeePesel);
                let newFiredEmployess = [...this.state.firedEmployees, response.data];
                this.setState(
                    {
                        hiredEmployees: newHiredEmployees,
                        firedEmployees: newFiredEmployess,
                    }
                )
            })
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showData;
        this.setState({showData: !doesShow});
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/employees/hired/')
            .then(response => {
                console.log(response)
                this.setState({
                    hiredEmployees: response.data.slice(0, 10)
                })
            })
        axios.get('http://127.0.0.1:8000/api/employees/fired/')
            .then(response => {
                console.log(response)
                this.setState({
                    firedEmployees: response.data.slice(0, 10)
                })
            })
    }

    render() {
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };


        let hiredEmp = <div>
            <h1>Hired Employees</h1>
            {this.state.hiredEmployees.map((employee, index) => {
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
        </div>;

        let firedEmp = null;

        if (this.state.showData) {
            firedEmp = (
                <div>
                    <h1>Fired Employees</h1>
                    {this.state.firedEmployees && this.state.firedEmployees.map((employee, index) => {
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
                </div>
            );

            style.backgroundColor = 'red';
        }

        const classes = [];

        if (this.state.hiredEmployees.length <= 2) {
            classes.push('red');
        }
        if (this.state.hiredEmployees.length <= 1) {
            classes.push('bold');
        }

        return (
                <div className="App">
                    <h1>ManageUrEmployees</h1>
                    <p className={classes.join(' ')}>Hello!</p>
                    {hiredEmp}
                    <button
                        style={style}
                        onClick={this.togglePersonsHandler}>Hide
                    </button>
                    {firedEmp}
                </div>
        );
    }
}

export default App;
