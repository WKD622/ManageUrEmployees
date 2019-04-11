import React, {Component} from 'react';
import Event from './Event/Event';
import './Events.css'
import {connect} from 'react-redux'
import {removeEvent, addEvent} from "../../actions";
import store from '../../store'

class Events extends Component {

    handleDelete = (id) => {
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
                data={event.datetime}
                handler={this.handleDelete}
                key={event.id}
            />
        }
        </div>
    );

    render() {
        const {events} = this.props;
        return (
            events.data.map((event, index) => this.event(event, index))
        )
    }
}

const mapStateToProps = (state) => ({events: state.events});

export default connect(mapStateToProps)(Events);