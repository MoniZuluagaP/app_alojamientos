import React from 'react'
import {Presentacion} from "./Presentacion";
import {Seccion} from "./Seccion";
import {SeccionDestacadas} from "./SeccionDestacadas";
import {SeccionTiposA} from "./SeccionTiposA";
import Header from "./Header";
import {PFormBusqueda} from "./PFormBusqueda";

export function Home() {
    return (
        <div>

            <Presentacion />
            <Seccion ClassName='destacadas' nombre='ALOJAMIENTOS DESTACADOS' />
            <SeccionDestacadas />
            <Seccion ClassName='categoriaPropiedades' nombre='TIPOS DE ALOJAMIENTOS' />
            <SeccionTiposA className='cardsCategorias' />
        </div>
    )
}