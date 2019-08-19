import React,{Component} from 'react';
import './App.css';
import Titulo_1 from './components/Titulo_1';
//import {post} from './post.json'
import Publicacion from './components/Publicacion';

class App extends Component{
  render(){
    return (
      <div className="App">
      <div className="row">
      <Titulo_1/>
      </div>





      <div className="row">
        <Publicacion col="col s7"/>




      </div>
            </div>



    );
  }
}

export default App;
