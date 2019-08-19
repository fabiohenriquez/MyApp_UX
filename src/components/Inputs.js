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


            <div className="card blue-grey darken-1">

            <form onSubmit={this.handleSubmit}>
            <h5> - </h5>
            <h5>Nueva Publicacion </h5>



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
                  placeholder="Estado de Animo"
                  />
              </div>

              <button type="submit" className="btn waves-effect waves-light">
                Publicar
              </button>
              <h5> - </h5>
            </form>
          </div>








        );


    }



}

export default Inputs
