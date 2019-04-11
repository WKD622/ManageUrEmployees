import React, {Component} from 'react';
import './Employee.css';
import store from '../../../store'
import {editEmployee} from "../../../actions";

class Employee extends Component {
    state = {
        showForm: false
    };

    hide = () => {
        const doesShow = this.state.showForm;
        this.setState({showForm: !doesShow});
    };

    handleChange = (employee) => {
        store.dispatch(editEmployee(employee.target.value))
    };

    render() {
        let employee = <div className="Employee">
            <p>
                First name: {this.props.first_name}
            </p>
            <p>
                Last name: {this.props.last_name}
            </p>
            <p>
                Salary: {this.props.salary}
            </p>
            <p>
                Pesel: {this.props.pesel}
            </p>
            <p>
                Position: {this.props.position}
            </p>
            <button onClick={() => this.props.handler(this.props.pesel)}>Fire</button>
            <button onClick={() => this.hide()}>Edit</button>
        </div>;


        if (this.state.showForm) {
            employee = <form className={"Employee"} onSubmit={this.handleChange}>
                <p>
                    <label>
                        First name:
                        <input type="text" value={this.props.first_name}/>
                    </label>
                </p>
                <p>
                    <label>
                        Last name:
                        <input type="text" value={this.props.last_name}/>
                    </label>
                </p>
                <p>
                    <label>
                        Salary:
                        <input type="text" value={this.props.salary}/>
                    </label>
                </p>
                <p>
                    <label>
                        Pesel:
                        <input type="text" value={this.props.pesel}/>
                    </label>
                </p>
                <p>
                    <label>
                        Position:
                        <input type="text" value={this.props.position}/>
                    </label>
                </p>

                <input type="submit" value="Save"/>
            </form>
        }

        return (
            <div>
                {employee}
            </div>
        )

    }
}

export default Employee;