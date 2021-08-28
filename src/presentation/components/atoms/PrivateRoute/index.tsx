
import { RouteProps, Route } from 'react-router-dom'
import React from 'react'

const PrivateRoute: React.FC<RouteProps> = (props: RouteProps) => {
  return <Route {...props} />
}

export default PrivateRoute
