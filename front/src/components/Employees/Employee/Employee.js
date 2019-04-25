import React, {Component} from 'react';
import './Employee.css';
import {requestEditEmployee} from "../../../actions/employees_actions";
import {connect} from 'react-redux'
import {bindActionCreators} from "redux/es/redux";

class Employee extends Component {
    state = {
        showForm: false
    };

    hide = () => {
        const doesShow = this.state.showForm;
        this.setState({showForm: !doesShow});
    };

    handleChange = (event) => {
        event.preventDefault();
        this.hide();
        let first_name = event.target.elements.first_name.value;
        let last_name = event.target.elements.last_name.value;
        let pesel = event.target.elements.pesel.value;
        let position = event.target.elements.position.value;
        let salary = event.target.elements.salary.value;

        const employee = {
            first_name: first_name,
            last_name: last_name,
            pesel: pesel,
            position: position,
            salary: salary,
        };

        this.props.requestEditEmployee(employee)
    };

    render() {
        let employee = <div className="Employee">
                <h2>
                    {this.props.first_name} {this.props.last_name}
                </h2>
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
            employee = <div>
                <form className={"Employee"} onSubmit={this.handleChange}>
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
            </div>
        }

        return (
            <div>
                {employee}
            </div>
        )
    }
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => bindActionCreators({requestEditEmployee}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Employee);