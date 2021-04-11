import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Details from "../views/Detail/Detail.view";
import Results from "../views/Results/Results.view";
import Search from "../views/Search/Search.view";

const Routes = () => {
    return (
        <Router>
            <Switch >
                <Route exact path="/">
                    <Search />
                </Route>
                <Route path="/items?search=">
                    <Results query="apple ipod" />
                </Route>
                <Route path="/items/:id">
                    <Details />
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;
