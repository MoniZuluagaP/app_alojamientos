import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CrearAlojamiento from './componentes/CrearAlojamiento';
import ActualizarAlojamiento from './componentes/ActualizarAlojamiento';
import EliminarAlojamiento from './componentes/EliminarAlojamiento';
import ListarAlojamiento from './componentes/ListarAlojamiento';

import './Admin.css';

// const Home = () => (
//   <div>
//     <h1>Página de Inicio</h1>
//     <Link to="/admin">Ir a Administración de Alojamiento</Link>
//   </div>
// );

const Admin = () => {
    // Estado para controlar qué sección de administración está activa
    const [seccionActiva, setSeccionActiva] = useState(null);

    const renderSeccionActiva = () => {
        switch (seccionActiva) {
            case 'crear':
                return <CrearAlojamiento />;
            case 'actualizar':
                return <ActualizarAlojamiento />;
            case 'eliminar':
                return <EliminarAlojamiento />;
            case 'listar':
                return <ListarAlojamiento />;
            default:
                return null;
        }
    };

    return (
        <div className="admin-container">
            <h1>Administración de Alojamiento</h1>
            {/* Botón para mostrar/ocultar el menú de administración */}
            <button className="toggle-button" onClick={() => setSeccionActiva(seccionActiva === null ? 'menu' : null)}>
                Administrar Alojamiento
            </button>

            {/* Menú desplegable de opciones de administración */}
            {seccionActiva === 'menu' && (
                <div className="menu-container">
                    <button onClick={() => setSeccionActiva('crear')}>Crear Alojamiento</button>
                    <button onClick={() => setSeccionActiva('actualizar')}>Actualizar Alojamiento</button>
                    <button onClick={() => setSeccionActiva('eliminar')}>Eliminar Alojamiento</button>
                    <button onClick={() => setSeccionActiva('listar')}>Listar Alojamiento</button>
                </div>
            )}

            {/* Renderizar la sección seleccionada */}
            {renderSeccionActiva()}

            <Link to="/">Volver a Inicio</Link>
        </div>
    );
};

const AppAdmin = () => {
    return (
        <Router>
            <div>
                <Routes>
                    {/*<Route path="/" element={<Home />} />*/}
                    <Route path="/" element={<Admin />} />
                </Routes>
            </div>
        </Router>
    );
};

export default AppAdmin;