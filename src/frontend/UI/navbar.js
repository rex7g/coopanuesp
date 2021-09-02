import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {Logo} from './logo.png'
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';

export class navbar extends Component {
    render() {
        return (
           <Router>
               <Switch>
                   <Route exact path="/"component={Homepage}/>
                   <Route exact path="/login"component={Login}/>
                   <Route exact path="/Registro"component={Registro}/>
                   <Route exact path="/Cuenta"component={Cuenta}/>
                   <Route exact path="/admmin/Inventario"component={Iventario}/>
                   <Route exact path="/admin/users"component={Usuarios}/>
                   <Route exact path="*"component={NotFoundpage}/>
                 
               </Switch>
           </Router>
        )
    }
}

export default navbar
