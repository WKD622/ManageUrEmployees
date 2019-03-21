import * as React from 'react';
import './Income.css';

const income = ( props ) => {
    return (
        <div className="Income">
            <p>{props.name}</p>
            <p>{props.sum}</p>
            <p>{props.date}</p>
        </div>
    )
};

export default income;