import { makeLogin, makeSignUp, makeHome, makePurchase } from '../pages'
import { PrivateRoute } from '../../presentation/components'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react'

const Router: React.FC = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={makeLogin} />
          <PrivateRoute path="/" exact component={makeHome} />
          <PrivateRoute path="/cadastro" exact component={makeSignUp} />
          <PrivateRoute path="/compras/cadastrar" exact component={makePurchase} />
        </Switch>
      </BrowserRouter>
  )
}

export default Router
