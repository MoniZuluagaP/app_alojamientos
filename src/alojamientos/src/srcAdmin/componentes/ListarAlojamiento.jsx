import React, { useState, useEffect } from 'react';

const ListarAlojamiento = () => {
  const [alojamientos, setAlojamientos] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlojamientos = async () => {
      try {
        const response = await fetch('http://localhost:3001/alojamiento/getAlojamientos');
        if (!response.ok) {
          throw new Error('Error al obtener la lista de alojamientos');
        }
        const data = await response.json();
        setAlojamientos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAlojamientos();
  }, []);

  if (loading) {
    return <p>Cargando alojamientos...</p>;
  }

  return (
    <div>
      <h1>Listado de Alojamientos</h1>
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

export default ListarAlojamiento;
