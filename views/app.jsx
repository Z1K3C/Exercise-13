//Genero las vistas para mi aplicacion, todo el codigo de esta carpeta se debe convertir a bundle.js
import React, { Component } from 'react';                   //Solicito a REACT desde node modules
import ReactDOM from 'react-dom';                           //Solicito a REACT-DOM para trabajar con el DOM virtual
import 'bootstrap/dist/css/bootstrap.css';                  //Solicito a bootstrap
import SECTION_1 from './SECTION_1.jsx';                    //Solicito la seccion de codigo generado en SECTION_1

class App extends Component {                               //Renderizo las etiquetas
  render() {
    return (
      <div>
        <SECTION_1/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));    //Lanzo a la etiqueta App en la id "app" del HTML