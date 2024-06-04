import React from 'react'
import logo from '../assets/casalogo.png'
import './Footer.css'

export function Footer() {
    return (
        <footer>
            <div className="redesSociales">
                <ul>
                    <li><a href="">Instagram</a></li>
                    <li><a href="">Facebook</a></li>
                    <li><a href="">Whatsapp</a></li>
                </ul>

                <img src={logo} width="150" alt="logo-empresa"/>
            </div>
        </footer>
    )
}