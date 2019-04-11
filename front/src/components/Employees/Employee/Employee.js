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

    handleChange = (event) => {
        store.dispatch(editEmployee(event.target.elements))
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
                        <input name="first_name" type="text" defaultValue={this.props.first_name}/>
                    </label>
                </p>
                <p>
                    <label>
                        Last name:
                        <input name="last_name" type="text" defaultValue={this.props.last_name}/>
                    </label>
                </p>
                <p>
                    <label>
                        Salary:
                        <input name="salary" type="text" defaultValue={this.props.salary}/>
                    </label>
                </p>
                <p>
                    <label>
                        Pesel:
                        <input name="pesel" type="text" defaultValue={this.props.pesel}/>
                    </label>
                </p>
                <p>
                    <label>
                        Position:
                        <input name="position" type="text" defaultValue={this.props.position}/>
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