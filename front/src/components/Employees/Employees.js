import React, {Component} from 'react';
// import axios from 'axios';
import Employee from './Employee/Employee';
import './Employees.css'
import {connect} from 'react-redux'

class Employees extends Component {
    // state = {
    //     employees: [],
    // };
    //
    // componentDidMount() {
    //     axios.get('http://127.0.0.1:8000/api/employees/')
    //         .then(response => {
    //             console.log(response);
    //             this.setState({
    //                 employees: response.data.slice(0, 10)
    //             })
    //         })
    // }
    //
    // deleteEmployeeHandler = (employeeIndex) => {
    //     const employees = this.state.employees.slice();
    //     employees.splice(employeeIndex, 1);
    //     this.setState({employees: employees})
    // };

    render() {
        const { employees } = this.props
        return <div className={Employees}>
            <h1>Employees</h1>
            {employees.map((employee, index) => {
                return <Employee
                    key={employee.pesel}
                    first_name={employee.first_name}
                    last_name={employee.last_name}
                    pesel={employee.pesel}
                    position={employee.position}
                    salary={employee.salary}
                    index={index}
                />
            })}
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        employees: state.employees
    }
};


export default connect(mapStateToProps())(Employees)