import React from "react";
import '../style-sheets/Card.css'

function Card(props) {
  return (
    <div className="contenedor-card">
      <img 
      className="img-card"
      src={require(`../img/imagen-${props.imagen}.jpg`)}
      alt="fotos"
      />
      <div className="contenedor-texto">
        <h1 className="titulo">
          {props.nombre}
        </h1>
        <p className="informacion">
          {props.info}
        </p>
      </div>
    </div>
  )
}

export default Card