import React, {Component} from 'react';
import Employee from './Employee/Employee';
import './Employees.css'
import {connect} from 'react-redux'
import {requestApiData} from "../../actions";
import {bindActionCreators} from "redux";

class Employees extends Component {

    componentDidMount() {
        this.props.requestApiData();
    }

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
            />
        }
        </div>
    );

    render() {
        const {results = []} = this.props.employees;
        console.log(this.props);
        return (
            <h1>
                Employees
                {results.map(this.person)}
            </h1>
        )
    }
}

const mapStateToProps = (state) => ({employees: state.employees });

const mapDispatchToProps = dispatch =>
    bindActionCreators({requestApiData}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Employees);