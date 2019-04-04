import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Employees from './Employees/Employees'
import Events from './Events/Events'
import Incomes from './Incomes/Incomes'
import Outcomes from './Outcomes/Outcomes'
import Bar from './LinksUpperBar/Bar'
// import Notfound from './NotFound/notfound'
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
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

ReactDOM.render(routing, document.getElementById('root'));
// ReactDOM.render(<App/>App, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
