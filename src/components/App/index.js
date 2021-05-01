import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Calculator from '../Calculator'
import StyleGuide from '../StyleGuide'


export default function App() {
  return (
    <Router>
      <Route exact path="/" component={Calculator} />
      <Route exact path="/style-guide" component={StyleGuide} />
    </Router>
  );
}
