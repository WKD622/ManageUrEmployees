import React, {Component} from 'react';
import './Employee/Employee.css';

class addNewEmployee extends Component {

    render() {
        return (
            <form className={"Employee"} >
                <p>
                    <label>
                        First name:
                        <input type="text"/>
                    </label>
                </p>
                <p>
                    <label>
                        Last name:
                        <input type="text"/>
                    </label>
                </p>
                <p>
                    <label>
                        Salary:
                        <input type="text"/>
                    </label>
                </p>
                <p>
                    <label>
                        Pesel:
                        <input type="text"/>
                    </label>
                </p>
                <p>
                    <label>
                        Position:
                        <input type="text"/>
                    </label>
                </p>

                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default addNewEmployee