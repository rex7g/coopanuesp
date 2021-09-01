import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export class navbar extends Component {
    render() {
        return (
            <div className="navbar">
            <div className="leftSide">
              <img src={Logo} alt="logo"/>
            
            </div>
            <div className="rightSide">
                <Link to="/home">Home </Link>
                <Link to="/multimedia">Multimedia </Link>
                <Link to="/contactos">Contactos </Link>
                <Link to="/login">Acceder </Link>
            </div>
            
          </div>
        )
    }
}

export default navbar
