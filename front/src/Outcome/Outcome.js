import React from 'react';
import './Outcome.css';

const outcome = ( props ) => {
    return (
        <div className="Outcome">
            <p>{props.name}</p>
            <p>{props.sum}</p>
            <p>{props.date}</p>
        </div>
    )
};

export default outcome;