import React from 'react'
import './CardDestacada.css'
import casa from '../assets/casa-portada.png'

export function CardDestacada(props) {
    return (
        <card className ='cdest'>
            <h4><a href="">{props.nombre}</a></h4>
            <img src={casa}/>
            <p className="infoPropiedadDestacada"><span className="enfasisTexto">Lo mejor de la propiedad: Lorem ipsum dolor sit amet! Officiis.</span>
            </p>
        </card>
    )
}