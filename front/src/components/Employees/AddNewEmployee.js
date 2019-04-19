import React, {Component} from 'react';
import './Employee/Employee.css';
import {postEmployee} from "../../api/employees_api";

class AddNewEmployee extends Component {

    handleAdd = (event) => {
        let first_name = event.target.elements.first_name.value;
        let last_name = event.target.elements.last_name.value;
        let pesel = event.target.elements.pesel.value;
        let position = event.target.elements.position.value;
        let salary = event.target.elements.salary.value;

        const new_employee = {
            first_name: first_name,
            last_name: last_name,
            pesel: pesel,
            position: position,
            salary: salary,
        };
        // console.log(new_employee);
        postEmployee(new_employee);
    };

    render() {
        return (
            <form className={"Employee"} onSubmit={this.handleAdd}>
                <p>
                    <label>
                        First name:
                        <input name="first_name" type="text"/>
                    </label>
                </p>
                <p>
                    <label>
                        Last name:
                        <input name="last_name" type="text"/>
                    </label>
                </p>
                <p>
                    <label>
                        Salary:
                        <input name="salary" type="text"/>
                    </label>
                </p>
                <p>
                    <label>
                        Pesel:
                        <input name="pesel" type="text"/>
                    </label>
                </p>
                <p>
                    <label>
                        Position:
                        <input name="position" type="text"/>
                    </label>
                </p>

                <input type="submit" value="Save"/>
            </form>
        )
    }
}

export default AddNewEmployee;