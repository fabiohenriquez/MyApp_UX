import React,{Component} from 'react';
import './App.css';
import Titulo_1 from './components/Titulo_1';
//import {post} from './post.json'
import Publicacion from './components/Publicacion';
import Relleno from './components/Relleno'

class App extends Component{
  render(){
    return (
      <div className="App">
      <div className="row">
      <Titulo_1/>
      </div>





      <div className="row">
      <Relleno col="col s3"/>
      <Publicacion col="col s6"/>
      <Relleno col="col s3"/>






      </div>
            </div>



    );
  }
}

export default App;
