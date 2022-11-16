import React from 'react';
import Card from './Card';
import imghuawei from "../img/tablet/huawei.png";
import imgiPad from '../img/tablet/iPad.png';
import imgLenovoTB from '../img/tablet/Lenovo-TB.png';
import imgSmsTab7 from '../img/tablet/Samsung-tab7.png';
import imgSmsTab8 from '../img/tablet/Samsung-tab8.png';
import imgxiaomi from '../img/tablet/xiaomi.png';

const cardsTablet = [
    {
        "id" : 1 ,
        "marca" : "Xiaomi Redmi Pad",
        "procesador": "MediaTek Helio G99 ",
        "ram": "4Gb",
        "pantalla" : "10.6'",
        "almacenamiento" : "128 Gb",
        "precio" : "$119900",
        "img": imgxiaomi
    },
    {
        "id" : 2 ,
        "marca" : "Samsung Tab A8 Lite",
        "procesador": "Mediatek MT8768T ",
        "ram": "3Gb",
        "pantalla" : "10.5'",
        "almacenamiento" : "32 Gb",
        "precio" : "$78999",
        "img": imgSmsTab8
    },
    {
        "id" : 3 ,
        "marca" : "Huawei MediaPad T3",
        "procesador": "Quad-Core A53 ",
        "ram": "3Gb",
        "pantalla" : "9.6'",
        "almacenamiento" : "32 Gb",
        "precio" : "$15000",
        "img": imghuawei
    },
    {
        "id" : 4 ,
        "marca" :  "Lenovo TB-8505F",
        "procesador": "Mediatek Helio A22",
        "ram": "2Gb",
        "pantalla" : "8'",
        "almacenamiento" : "32 Gb",
        "precio" : "$39990",
        "img": imgLenovoTB
    },
    {
        "id" : 5 ,
        "marca" :  "Samsung Tab A7 Lite",
        "procesador": "Octa-Core 2.3 GHz ",
        "ram": "3Gb",
        "pantalla" : "8'",
        "almacenamiento" : "32 Gb",
        "precio" : "$34999",
        "img": imgSmsTab7
    },
    {
        "id" : 6 ,
        "marca" :  "iPad Apple",
        "procesador": "A13 Bionic",
        "ram": "8Gb",
        "pantalla" : "10.2'",
        "almacenamiento" : "64 Gb",
        "precio" : "$122999",
        "img": imgiPad
    }
    
]

function
 CardsTablets(){
  return (
    <div className="container d-flex justify-content-center align-items-center h-100  ">
        <div className="row">
            <h3 className="titulo m-3">Tablets</h3>
            {
            cardsTablet.map(card => (
                <div className="col-md-4" key={card.id}>
                    <Card title={card.marca} img={card.img} alm ={card.almacenamiento} proce={card.procesador} ram= {card.ram} screen={card.pantalla} precio= {card.precio}/>
                </div>
            ))
        
        }
        </div>
  </div>
)};


export default CardsTablets