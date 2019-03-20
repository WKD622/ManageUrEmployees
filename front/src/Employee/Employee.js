import React from 'react';
import './Employee.css';

const employee = ( props ) => {
    return (
        <div className="Employee">
            <p>First name: {props.first_name}</p>
            <p>Last name: {props.last_name}</p>
            <p>Salary: {props.salary}</p>
            <p>Pesel: {props.pesel}</p>
            <p>Position: {props.position}</p>
        </div>
    )
};

export default employee;