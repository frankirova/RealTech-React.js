import React from 'react';
import Card from './Card';
import imgDellInspiron from "../img/note/Dell-inspiron.jpg"
import imgAcerAspire from '../img/note/Acer-aspire-5.jpg'
import imgLenovoV15 from '../img/note/Lenovo-v15.jpg'
import imgBanghoL4 from '../img/note/Bangho-L41.png'
import imgThinkpad from '../img/note/Lenovo-Thinkpad-E14.jpg'




const cardsNote = [
    {
        "id" : 1,
        "marca" : "Dell Inspiron 3511",
        "procesador": "i7 1165G7",
        "ram": "8Gb",
        "pantalla" : "15.0'",
        "almacenamiento" : "256Gb SSD",
        "sistema operativo" : "Free",
        "precio" : "$249990",
        "img" : imgDellInspiron
    },
    {
        "id" : 2,
        "marca" : "Acer Aspire 5",
        "procesador": "i5 1135G7",
        "ram": "8Gb",
        "pantalla" : "15.6'",
        "almacenamiento" : "256Gb SSD",
        "sistema operativo" : "Free",
        "precio" : "$176990",
        "img" : imgAcerAspire
    },
    {
        "id" : 3,
        "marca" : "Lenovo V15",
        "procesador": "i5 1035G1",
        "ram": "4Gb",
        "pantalla" : "15.6'",
        "almacenamiento" : "256Gb SSD",
        "sistema operativo" : "Free",
        "precio" : "$179990",
        "img" : imgLenovoV15
    },
    {
        "id" : 4,
        "marca" : "Lenovo V15",
        "procesador": "i7 1165G7",
        "ram": "16Gb",
        "pantalla" : "15.6'",
        "almacenamiento" : "240Gb SSD",
        "sistema operativo" : "Free",
        "precio" : "$244990",
        "img" : imgLenovoV15
    },
    {   
        "id" : 5 ,
        "marca" : "Bangho Max L4",
        "procesador": "i5 1021U",
        "ram": "8Gb",
        "pantalla" : "14.0'",
        "almacenamiento" : "240Gb SSD",
        "sistema operativo" : "Free",
        "precio" : "$143990",
        "img" : imgBanghoL4
    },
    
    {
        "id" : 6,
        "marca" : "Lenovo Thinkpad E14",
        "procesador": "i7 1165G7",
        "ram": "8Gb",
        "pantalla" : "14.0'",
        "almacenamiento" : "256Gb SSD",
        "sistema operativo" : "Free",
        "precio" : "$279990",
        "img" : imgThinkpad
    }
]


function
 CardsNotebook  ()  {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100  ">

        <div className="row">

            <h3 className="titulo m-3">Notebooks</h3>
            {
            cardsNote.map(card => (
                <div className="col-md-4" key={card.id}>
                    <Card  
                        title={card.marca} 
                        img={card.img} 
                        alm ={card.almacenamiento} 
                        proce={card.procesador} 
                        ram= {card.ram} 
                        screen={card.pantalla} 
                        precio= {card.precio}
                    />
                </div>))
            }

        </div>
        
    </div>
)};


export default CardsNotebook