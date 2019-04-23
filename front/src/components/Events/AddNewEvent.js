import React, {Component} from 'react';
import './Event/Event.css';
import {postEvents} from "../../api/events_api";

class AddNewEvent extends Component {

    handleAdd = (event) => {
        let name = event.target.elements.name.value;
        let description = event.target.elements.description.value;
        let datetime = event.target.elements.datetime.value;

        const new_event = {
            name: name,
            description: description,
            datetime: datetime,
        };
        postEvents(new_event);
    };

    render() {
        return (
            <form className={"Event"} onSubmit={this.handleAdd}>
                <p>
                    <label>
                        Name:
                        <input name="name" type="text"/>
                    </label>
                </p>
                <p>
                    <label>
                        Description:
                        <input name="description" type="text"/>
                    </label>
                </p>
                <p>
                    <label>
                        Date and time:
                        <input name="datetime" type="text"/>
                    </label>
                </p>

                <input type="submit" value="Save"/>
            </form>
        )
    }
}

export default AddNewEvent;