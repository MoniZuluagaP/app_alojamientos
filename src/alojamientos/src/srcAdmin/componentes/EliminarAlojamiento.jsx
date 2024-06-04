import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EliminarAlojamiento = () => {
  const [alojamientos, setAlojamientos] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAlojamientos = async () => {
      try {
        const response = await fetch('http://localhost:3001/alojamiento/getAlojamientos');
        if (response.ok) {
          const data = await response.json();
          setAlojamientos(data);
        } else {
          throw new Error('Error al obtener la lista de alojamientos');
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchAlojamientos();
  }, []);

  const eliminarAlojamiento = async (id) => {
    const confirmacion = window.confirm(`¿Estás seguro de que quieres eliminar el alojamiento con ID ${id}?`);
    if (!confirmacion) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:3001/alojamiento/deleteAlojamiento/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setAlojamientos(alojamientos.filter(alojamiento => alojamiento.idAlojamiento !== id));
        toast.success('Alojamiento eliminado con éxito');
      } else {
        throw new Error('Error al eliminar el alojamiento');
      }
    } catch (err) {
      toast.error(err.message || 'Error al eliminar el alojamiento');
    }
  };

  return (
    <div>
      <ToastContainer />
      <h1>Eliminar Alojamiento</h1>
      {error && <div className="error-message">{error}</div>}
      {alojamientos.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Descripción</th>
              <th>Latitud</th>
              <th>Longitud</th>
              <th>Precio por Día</th>
              <th>Cantidad de Dormitorios</th>
              <th>Cantidad de Baños</th>
              <th>Estado</th>
              <th>Tipo de Alojamiento</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {alojamientos.map((alojamiento) => (
              <tr key={alojamiento.idAlojamiento}>
                <td>{alojamiento.idAlojamiento}</td>
                <td>{alojamiento.Titulo}</td>
                <td>{alojamiento.Descripcion}</td>
                <td>{alojamiento.Latitud}</td>
                <td>{alojamiento.Longitud}</td>
                <td>{alojamiento.PrecioPorDia}</td>
                <td>{alojamiento.CantidadDormitorios}</td>
                <td>{alojamiento.CantidadBanios}</td>
                <td>{alojamiento.Estado}</td>
                <td>{alojamiento.TipoAlojamiento}</td>
                <td>
                  <button onClick={() => eliminarAlojamiento(alojamiento.idAlojamiento)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay alojamientos disponibles</p>
      )}
    </div>
  );
};

export default EliminarAlojamiento;
