import React from 'react'
import { Switch, Route } from 'react-router-dom'


import Home from '../pages/Home'
import Fact from '../pages/Fact'
import Curriculum from '../pages/Curriculum'
import Anfahrt from '../pages/Anfahrt'


export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/Curriculum" component={Curriculum} />
   
    <Route exact path="/Fact" component={Fact} />
    <Route exact path="/Anfahrt" component={Anfahrt} />
  </Switch>
)