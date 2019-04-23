import React, {Component} from 'react';
import Event from './Event/Event';
import './Events.css'
import {connect} from 'react-redux'
import AddNewEvent from "./AddNewEvent";
import {deleteEvent} from "../../api/events_api";

class Events extends Component {

    handleDelete = (id) => {
        deleteEvent(id)
    };

    event = (event) => (
        <div className={Events}>{
            <Event
                name={event.name}
                description={event.description}
                datetime={event.datetime}
                handler={this.handleDelete}
                key={event.id}
                id={event.id}
            />
        }
        </div>
    );

    render() {
        const {events} = this.props;
        return (
            <div className="Events">
                <h1>Events</h1>
                <AddNewEvent/>
                {events.data.map((event, index) => this.event(event, index))}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({events: state.events});

export default connect(mapStateToProps)(Events);