import * as React from 'react';
import './Employee.css';

const employee = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    return (
        <div className="Employee" style={style}>
            <p>First name: {props.first_name}</p>
            <p>Last name: {props.last_name}</p>
            <p>Salary: {props.salary}</p>
            <p>Pesel: {props.pesel}</p>
            <p>Position: {props.position}</p>
            <button onClick={() => props.handler(props.pesel)}>Fire</button>
        </div>
    )
};

export default employee;