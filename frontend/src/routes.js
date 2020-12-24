import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store/index'
import Home from './pages/Home/Home';
import Drink from './pages/Drink/Drink';


export default function Routes() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/drink' component={Drink} />
                </Switch>
            </BrowserRouter>
        </Provider>

    );
}