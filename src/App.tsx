import { Main } from './Main'
import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

export const App = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}