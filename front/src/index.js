import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Employees from './Employees/Employees'
import Events from './Events/Events'
import Incomes from './Incomes/Incomes'
import Outcomes  from './Outcomes/Outcomes'
import { Route, Link, BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/employees" component={Employees} />
      <Route path="/events" component={Events} />
      <Route path="/outcomes" component={Outcomes} />
      <Route path="/incomes" component={Incomes} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
