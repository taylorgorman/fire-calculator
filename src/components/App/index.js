import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Calculator from '../Calculator'


export default function () {

  return (

    <Router>
      <Route exact path="/" component={ Calculator } />
    </Router>

  )

}
