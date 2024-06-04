import React from 'react'
import './PFormBusqueda.css'
import casaPrincipal from '../assets/casaPortada2.png'


export function PFormBusqueda() {
    return (
        <div className="EncabezadoFormularioImagen">
            <form action="" className="formularioBusqueda">

                <div className="formFechas">
                    <label htmlFor="fechaIngreso"> Fecha de ingreso
                        <input type="date" id="fechaIngreso" placeholder="01/01/2000"/>
                    </label>
                    <label htmlFor="fechaSalida"> Fecha de salida
                        <input type="date" id="fechaSalida" placeholder="01/01/2000" />
                    </label>
                </div>
                <div className="formLugar">
                    <label htmlFor="lugarAlquiler"> Ubicación/Localidad
                        <input type="text" id="lugarAlquiler" placeholder="Elige la ciudad" />
                    </label>
                    <label htmlFor="numeroPersonas"> Cantidad de huéspedes
                        <input type="number" id="numeroPersonas" />
                    </label>
                </div>
                <input type="submit" className="buscar" value="Buscar" />
                {/*<BotonBusqueda type='submit' ClassName='buscar' value='Buscar' />*/}

            </form>

            <h1>VACACIONES PERFECTAS <br/><strong className="textoResaltado">EN EL LUGAR PERFECTO</strong></h1>
            <div id="casaPortada">
                <img src={casaPrincipal} alt="Casa de portada" />
            </div>
        </div>
    )
}