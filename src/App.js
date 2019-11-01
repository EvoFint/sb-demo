import React, { Component } from 'react';
import NavMenu from './components/NavMenu';

import EmpList from './components/EmpList';
import NewEmp from './components/NewEmp';
import Settings from './components/Settings';

import { HashRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <NavMenu/>
                    <Switch>
                        <Route path="/" exact component={EmpList} />
                        <Route path="/newemployee" component={NewEmp} />
                        <Route path="/settings" component={Settings} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;
