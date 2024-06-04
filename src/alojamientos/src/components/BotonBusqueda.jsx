import React from 'react'
import './BotonBusqueda.css'

export function BotonBusqueda(props) {
    return (
        <input type="submit" className={props.className} value="Buscar" />
    )
}