import React from 'react';


class Relleno extends React.Component {
    render(){
        return(

            <div className={this.props.col}>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                    <span className="card-title">
                    <h4>Bienvenidos</h4></span>
                    <h5>{this.props.name}
                    </h5>

                    </div>

                </div>
            </div>




        );
    }
}

export default Relleno
