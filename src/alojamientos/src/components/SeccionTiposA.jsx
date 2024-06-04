import React from 'react'
import {CardCategorias} from "./CardCategorias";
import './SeccionTiposA.css'

export function SeccionTiposA(props) {
    return (
        <div className={props.className}>
            <CardCategorias nombre='Lofts'/>
            <CardCategorias nombre='Cabanhas' />
            <CardCategorias nombre='Glampings' />
            <CardCategorias nombre='Casas' />
            <CardCategorias nombre='Hotel Room' />
        </div>
    )
}