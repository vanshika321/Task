import React ,{Component} from 'react';
import {Route,Switch} from  'react-router-dom'
import Clients from "./components/clients"

import './App.css';

import Archiveds from './components/archiveds';


class App  extends Component {
  render() { 
    return (
      <main className="containers">
        <Switch>

        <Route exact path="/"   component={Clients}/>
        <Route path="/clients" component={Clients}/>
        <Route path="/archived" component={Archiveds}/>
       

      
        </Switch>
        
      
      </main>
    );
    
  }
}
 
export default App ;
