import React from 'react'
import './Seccion.css'

import SeccionDestacadas from "./SeccionDestacadas";

export function Seccion(props) {
    return (
        <section className={props.ClassName}>
            <h3 className="tituloSeccion">{props.nombre}</h3>
            {/*<SeccionDestacadas />*/}

        </section>
    )
}