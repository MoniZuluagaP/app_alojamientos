import React from 'react'
import {CardDestacada} from "./CardDestacada";
import './SeccionDestacadas.css'


export function SeccionDestacadas() {
    return (
        <div>
            <div className="propDestacadas1">
                <CardDestacada nombre ='Destacada1'/>
                <CardDestacada nombre ='Destacada2'/>
                <CardDestacada nombre ='Destacada3'/>
            </div>

            <div className="propDestacadas2">
                <CardDestacada nombre ='Destacada4'/>
                <CardDestacada nombre ='Destacada5'/>
                <CardDestacada nombre ='Destacada6'/>
            </div>
            <div className="navDestacadas">
                <ul>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                </ul>

                <button className="buscar"><a href="#">Ver todas</a></button>
            </div>
        </div>
    )
}