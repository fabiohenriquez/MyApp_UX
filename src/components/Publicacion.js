import React from 'react';
import {post} from '../post.json'
import Inputs from './Inputs.js';


class Publicacion extends React.Component {

  constructor(){
      super();
      this.state={
          post
      };
      this.handleAddTodo = this.handleAddTodo.bind(this);


  }
/////////////////// -------- LOCAL STORAGE --------------------////////////////
  handleAddTodo(post) {


      var datosJson= JSON.stringify(this.state.post);
      localStorage.setItem('datosJson ', datosJson );

      this.setState({



        post: [...this.state.post, post]

      })
    }
//////////////////////////-------

      render(){


          const post = this.state.post.map((post, i) => {
              return (
                      <div className="card mt.4">
                      <div class="card blue-grey darken-3" key={i}>
                          <div class="card-content white-text">
                          <span class="card-title">
                          <h5>{post.Titulo}</h5>
                          </span>


                          <div class="card-action">
                              {post.Nombre}
                          </div>
                          <div class="card-action">
                              {post.Cuerpo}
                          </div>
                          <div class="card-action">
                              {post.Estado}
                          </div>
                          </div>
                      </div>
                      </div>



              )
            })






          return(


                  <div className={this.props.col}>
                      <Inputs onAddTodo={this.handleAddTodo} ></Inputs>
                      <div className="divider"></div>
                      <div className="card blue-grey darken-4">
                           {post}
                      </div>

                  </div>

                );
            }
        }


  export default Publicacion
