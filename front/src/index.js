import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Employees from './components/Employees/Employees'
import Events from './components/Events/Events'
import Incomes from './components/Incomes/Incomes'
import Outcomes from './components/Outcomes/Outcomes'
import './components/LinksUpperBar/Bar.css'
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from "./store"


const routing = (
    <Router>
        <script>var Alert = ReactBootstrap.Alert;</script>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/employees">Employees</Link>
                </li>
                <li>
                    <Link to="/events">Events</Link>
                </li>
                <li>
                    <Link to="/incomes">Incomes</Link>
                </li>
                <li>
                    <Link to="/outcomes">Outcomes</Link>
                </li>
            </ul>
            {/*<Switch>*/}
            <Route path="/" component={App}/>
            <Route path="/employees" component={Employees}/>
            <Route path="/events" component={Events}/>
            <Route path="/outcomes" component={Outcomes}/>
            <Route path="/incomes" component={Incomes}/>
            {/*</Switch>*/}
        </div>
    </Router>
);

ReactDOM.render(<Provider store={store}>{routing}</Provider>, document.getElementById('root'));
serviceWorker.unregister();
