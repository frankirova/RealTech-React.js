import React from 'react';
import Card from './Card';
import imgA52 from "../img/celu/samsung-A52.png";
import imgS20FE from '../img/celu/samsung-S20FE.png';
import imgS22Plus from '../img/celu/samsung-S22+.png';
import imgZFold from '../img/celu/samsung-Z.FOLD.png';
import imgMoto20 from '../img/celu/motorola-edge20.png';
import imgMotoG71 from '../img/celu/motorola-G71.png';

const cardsCelu = [
    {   
        "id" : 1 ,
        "marca" : "Samsung Galaxy A52s",
        "procesador": "Octa Core 2.4 GHz, 1.8 GHz",
        "ram": "6Gb",
        "pantalla" : "6.5'",
        "almacenamiento" : "128 Gb",
        "precio" : "$125999",
        "img": imgA52
    },{   
        "id" : 2 ,
        "marca" : "Samsung Galaxy S20 Fan Edition",
        "procesador": "Octa Core 2.8 GHz, 2.4 GHz, 1.8 GHz",
        "ram": "6Gb",
        "pantalla" : "6.5'",
        "almacenamiento" : "128 Gb",
        "precio" : "$110999",
        "img": imgS20FE
    },{   
        "id" : 3 ,
        "marca" : "Samsung Galaxy S22 Plus",
        "procesador": "Samsung Galaxy S22 Plus",
        "ram": "8Gb",
        "pantalla" : "6.6'",
        "almacenamiento" : "240Gb",
        "precio" : "$299999",
        "img": imgS22Plus
    },{   
        "id" : 4 ,
        "marca" : "Samsung Galaxy Z Fold 4",
        "procesador": "Octa Core 3.18 GHz, 2.7 GHz, 2 GHz.",
        "ram": "12Gb",
        "pantalla" : "7.6'",
        "almacenamiento" : "512Gb",
        "precio" : "$429999",
        "img": imgZFold
    },{   
        "id" : 5 ,
        "marca" : "Motorola Edge 20 Pro",
        "procesador": "Octa Core 3.2 GHz",
        "ram": "8Gb",
        "pantalla" : "6.7'",
        "almacenamiento" : "256Gb",
        "precio" : "$110999",
        "img": imgMoto20
    },{   
        "id" : 6 ,
        "marca" : "Motorola Moto G71",
        "procesador": "Octa Core 2.2 GHz",
        "ram": "6Gb",
        "pantalla" : "6.43'",
        "almacenamiento" : "128Gb",
        "precio" : "$143990",
        "img": imgMotoG71 
    }
]

function
 CardsCelulares(){
  return (
    <div className="container d-flex justify-content-center align-items-center h-100  ">
        <div className="row">
            <h3 className="titulo m-3">Celulares</h3>
            {
            cardsCelu.map(card => (
                <div className="col-md-4" key={card.id}>
                    <Card title={card.marca} img={card.img} alm ={card.almacenamiento} proce={card.procesador} ram= {card.ram} screen={card.pantalla} precio= {card.precio}/>
                </div>
            ))
        
        }
        </div>
  </div>
)};


export default CardsCelulares