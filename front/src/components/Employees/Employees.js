import React, {Component} from 'react';
import Employee from './Employee/Employee';
import './Employees.css'
import {connect} from 'react-redux'

import store from '../../store'

class Employees extends Component {

    handleDelete = (pesel) => {
    };


    handleAdd = (employee) => {
    };


    person = (employee, index) => (
        <div className={Employees}>{
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
            employees.data.map((employee, index) => this.person(employee, index))
        )
    }
}

const mapStateToProps = (state) => ({employees: state.employees});

export default connect(mapStateToProps)(Employees);