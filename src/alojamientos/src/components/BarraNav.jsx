import React from 'react';
import './BarraNav.css';
import logo from '../assets/casalogo.png'
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import AppAdmin from "../srcAdmin/AppAdmin";
import {Home} from "./Home";

export function BarraNav() {
    return (
        <Router>

        <nav className="barraNavegacion">
            <ul>
                <img src={logo} className='logoBarra' alt='Logo empresa HOUSE'/>
                <li><Link to='/' ClassName='NavLink'>HOME</Link></li>
                <li><Link to="#" ClassName='NavLink'>INSTITUCIONAL</Link></li>
                <li><Link to='/admin' ClassName='NavLink'>ADMINISTRATIVO</Link></li>
                <li><Link to="/" ClassName='NavLink'>CONTACTANOS</Link></li>
                <li><Link to="#" ClassName='NavLink'>REGISTRO</Link></li>
            </ul>
        </nav>

            <Routes>
                <Route path="/admin" element={<AppAdmin/>} />
            </Routes>
        </Router>)
}