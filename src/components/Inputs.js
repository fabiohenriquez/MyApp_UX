import React from 'react';


class Inputs extends React.Component {
    constructor(){
        super();
        this.state={

          Titulo: '',
          Nombre: '',
          Cuerpo: '',
          Estado: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }



    handleSubmit(e) {

        e.preventDefault();
        this.props.onAddTodo(this.state);
        this.setState({

          Titulo: '',
          Nombre: '',
          Cuerpo: '',
          Estado: ''
        });



    }

    handleInputChange(e) {
        const {value, name} = e.target;
        console.log(value, name);
        this.setState({
          [name]: value
        });
    }




    render(){
        return(


            <div className="card-panel teal">
            <form onSubmit={this.handleSubmit}>
              <h5>Transaccion a Realizar</h5>
              <div>
                <input
                  type="text"
                  name="Titulo"
                  className="autocomplete"
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  placeholder="Nueva Publicacion"
                  />
              </div>

              <div>
                <input
                  type="text"
                  name="Nombre"
                  className="autocomplete"
                  value={this.state.description}
                  onChange={this.handleInputChange}
                  placeholder="Nombre"
                  />
              </div>

              <div>
                <input
                  type="text"
                  name="Cuerpo"
                  className="autocomplete"
                  value={this.state.description}
                  onChange={this.handleInputChange}
                  placeholder="Cuerpo"
                  />
              </div>

              <div>
                <input
                  type="text"
                  name="Estado"
                  className="autocomplete"
                  value={this.state.description}
                  onChange={this.handleInputChange}
                  placeholder="Estado"
                  />
              </div>

              <button type="submit" className="btn waves-effect waves-light">
                Save
              </button>
            </form>
          </div>








        );


    }



}

export default Inputs
