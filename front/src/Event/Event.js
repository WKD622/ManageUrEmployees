import React from 'react';
import './Event.css';

const event = ( props ) => {
    return (
        <div className="Event">
            <p>Name: {props.name}</p>
            <p>Description: {props.description}</p>
            <p>Date, time: {props.datetime}</p>
        </div>
    )
};

export default event;