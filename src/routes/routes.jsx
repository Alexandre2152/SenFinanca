import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from '../components/home'
import Adicionar from '../components/adicionar'
import Editar from '../components/editar'


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/adicionar" component={ Adicionar } />
            <Route exact path="/editar/:id" component={ Editar } />
        </Switch>
    </BrowserRouter>
)

export default Routes