import React from "react";
import './Card.css'

function Card(props) {

    return (
      <div className="card">
        <div className="card-img-top">
            <img src={props.img} alt="img"></img>
        </div>
        <h4 className="card-title">{props.title}</h4>
        
        
        <div className="caracteristicas">
          <p className="card-text text-secondary">{props.ram}</p>
          <p className="card-text text-secondary">{props.screen}</p>
          <p className="card-text text-secondary">{props.alm}</p>
          <p className="card-text text-secondary">{props.proce}</p>
        </div>
        <p className="card-text precio"><b>{props.precio}</b></p>
        <button id=""className="btn btn-success">Agregar al carrito</button>
      </div>
      
    );
  }
  export default Card;