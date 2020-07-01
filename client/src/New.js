import React, {Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import App  from "./App";
import Second from "./Second";


class New extends Component {
    render(){
        let routes = (
            <Switch>
                <Route exact path='/' component={App} />
                <Route exact path='/app' component={App} />
                <Route exact path='/second' component={Second} />
                {/* <Route exact path='/teams' component={Teams} /> */}
                <Redirect to='/' />
            </Switch>
        );
        return(
            <div>
                {routes}
            </div>
        )
    }
}
export default New;