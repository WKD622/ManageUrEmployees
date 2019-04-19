import './Event.css';
import React, {Component} from 'react';
import store from '../../../store'
import {putEvent} from "../../../api/events_api";
import {putEmployee} from "../../../api/employees_api";

// import {editEvent} from "../../../actions/events_actions";

class Event extends Component {
    state = {
        showForm: false
    };

    hide = () => {
        const doesShow = this.state.showForm;
        this.setState({showForm: !doesShow});
    };

    handleChange = (event) => {
        event.preventDefault();
        this.hide();
        let name = event.target.elements.name.value;
        let description = event.target.elements.description.value;
        let datetime = event.target.elements.datetime.value;
        let id = event.target.elements.id.value;

        const edited_event = {
            name: name,
            description: description,
            datetime: datetime,
            id: id,
        };

        putEvent(edited_event)
    };

    render() {

        let event = <div className="Event">
            <p>
                Name: {this.props.name}
            </p>
            <p>
                Description: {this.props.description}
            </p>
            <p>
                Date, time: {this.props.datetime}
            </p>
            <button onClick={() => this.props.handler(this.props.id)}>Delete</button>
            <button onClick={() => this.hide()}>Edit</button>
        </div>;

        if (this.state.showForm) {
            event = <form className={"Event"} onSubmit={this.handleChange}>
                <p>
                    <label>
                        Name:
                        <input type="text" defaultValue={this.props.name}/>
                    </label>
                </p>
                <p>
                    <label>
                        Description:
                        <input type="text" defaultValue={this.props.description}/>
                    </label>
                </p>
                <p>
                    <label>
                        Date, time:
                        <input type="text" defaultValue={this.props.datetime}/>
                    </label>
                </p>
                <p>
                    <label>
                        id:
                        <input type="hidden" defaultValue={this.props.id}/>
                    </label>
                </p>
                <input type="submit" value="Save"/>
            </form>
        }

        return (
            <div>
                {event}
            </div>
        )
    }
}

export default Event