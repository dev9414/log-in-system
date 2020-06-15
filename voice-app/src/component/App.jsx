import React, { Component } from "react";
import Login from './login/Login'
import axios from 'axios'
import Dashboard from './Dashboard'
import  { Redirect } from 'react-router-dom'
import MainRoutes from '../mainroute/mainroute'
class App extends Component{
  
    render(){   
    
    return (<div>
                <MainRoutes  />
                {/* <Login getUser={this.getUser}/> */}
               

           </div>
            );
    }
}


export default App;