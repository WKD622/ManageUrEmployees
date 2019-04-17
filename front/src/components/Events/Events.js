import React, {Component} from 'react';
import Event from './Event/Event';
import './Events.css'
import {connect} from 'react-redux'
import {removeEvent, addEvent} from "../../actions/events_actions";
import store from '../../store'

class Events extends Component {

    handleDelete = (id) => {
        console.log(id);
        store.dispatch(removeEvent(id))
    };


    handleAdd = (event) => {
        store.dispatch(addEvent(event))
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
        console.log(this.props);
        const {events} = this.props;
        return (
            events.data.map((event, index) => this.event(event, index))
        )
    }
}

const mapStateToProps = (state) => ({events: state.events});

export default connect(mapStateToProps)(Events);