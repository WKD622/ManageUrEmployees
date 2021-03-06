import React, {Component} from 'react';
import Employee from './Employee/Employee';
import './Employees.css'
import {connect} from 'react-redux'
import {deleteEmployee} from "../../api/employees_api";
import AddNewEmployee from "./AddNewEmployee"

class Employees extends Component {

    handleDelete = (pesel) => {
        deleteEmployee(pesel)
    };

    person = (employee, index) => (
        <div>{
            <Employee
                key={employee.pesel}
                first_name={employee.first_name}
                last_name={employee.last_name}
                pesel={employee.pesel}
                position={employee.position}
                salary={employee.salary}
                index={index}
                handler={this.handleDelete}
            />
        }
        </div>
    );

    render() {
        const {employees} = this.props;
        return (
            <div className="Employees">
                <h1>Employees</h1>
                <AddNewEmployee/>
                {employees.data.map((employee, index) => this.person(employee, index))}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({employees: state.employees});

export default connect(mapStateToProps)(Employees);