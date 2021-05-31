import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from '../components/home'
import Adicionar from '../components/adicionar'


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/adicionar" component={ Adicionar } />
        </Switch>
    </BrowserRouter>
)

export default Routes