import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error404 from './pages/Error404';


function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                {/* Ajoutez vos autres routes ici */}
                <Route component={Error404} />
            </Switch>
        </Router>
    );
}

export default Routes;
