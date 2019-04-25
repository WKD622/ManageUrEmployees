import React, {Component} from 'react';
import './Employee/Employee.css';
import {bindActionCreators} from "redux/es/redux";
import {requestAddEmployee} from "../../actions/employees_actions";
import {connect} from 'react-redux'

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

        this.props.requestAddEmployee(new_employee);
    };

    render() {
        return (
            <div>
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
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({requestAddEmployee}, dispatch);
export default connect(null, mapDispatchToProps)(AddNewEmployee);