import React from "react";
import {BrowserRouter,Route,Switch  } from "react-router-dom";
import Liga from './components/Liga/Liga';
import Calendario from './components/calendario/Calendario'

const Router =()=>(
<BrowserRouter>
<Switch>
<Route exact path="/" component={Calendario} />
<Route exact path="/Liga" component={Liga} />
<Route exact path="/Calendario" component={Calendario} />
</Switch>
</BrowserRouter>
)


export default Router;