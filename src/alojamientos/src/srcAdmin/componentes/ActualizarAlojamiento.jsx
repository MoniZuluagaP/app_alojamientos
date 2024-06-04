import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Esquema de validación con Yup
const validationSchema = Yup.object({
  Titulo: Yup.string().required('Título es requerido'),
  Descripcion: Yup.string().required('Descripción es requerida'),
  Latitud: Yup.number().required('Latitud es requerida').min(-90, 'Latitud mínima es -90').max(90, 'Latitud máxima es 90'),
  Longitud: Yup.number().required('Longitud es requerida').min(-180, 'Longitud mínima es -180').max(180, 'Longitud máxima es 180'),
  PrecioPorDia: Yup.number().required('Precio por Día es requerido').positive('Debe ser un número positivo'),
  CantidadDormitorios: Yup.number().required('Cantidad de Dormitorios es requerida').positive('Debe ser un número positivo').integer('Debe ser un número entero'),
  CantidadBanios: Yup.number().required('Cantidad de Baños es requerida').positive('Debe ser un número positivo').integer('Debe ser un número entero'),
  Estado: Yup.string().required('Estado es requerido'),
  TipoAlojamiento: Yup.string().required('Tipo de Alojamiento es requerido')
});

const ActualizarAlojamiento = () => {
  const [alojamientos, setAlojamientos] = useState([]);
  const [error, setError] = useState('');
  const [selectedAlojamiento, setSelectedAlojamiento] = useState(null);

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

  const handleSelectAlojamiento = (alojamiento) => {
    setSelectedAlojamiento(alojamiento);
  };

  const handleUpdate = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await fetch(`http://localhost:3001/alojamiento/putAlojamiento/${selectedAlojamiento.idAlojamiento}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (response.ok) {
        const updatedAlojamiento = await response.json();
        setAlojamientos(alojamientos.map(alojamiento =>
          alojamiento.idAlojamiento === selectedAlojamiento.idAlojamiento
            ? updatedAlojamiento
            : alojamiento
        ));
        setSelectedAlojamiento(null);
        resetForm();
        toast.success('Alojamiento actualizado con éxito!');
      } else {
        throw new Error('Error al actualizar el alojamiento');
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <ToastContainer />
      <h1>Actualizar Alojamiento</h1>
      {error && <div className="error-message">{error}</div>}
      {selectedAlojamiento ? (
        <div>
          <h2>Actualizar {selectedAlojamiento.Titulo}</h2>
          <Formik
            initialValues={{
              Titulo: selectedAlojamiento.Titulo,
              Descripcion: selectedAlojamiento.Descripcion,
              Latitud: selectedAlojamiento.Latitud,
              Longitud: selectedAlojamiento.Longitud,
              PrecioPorDia: selectedAlojamiento.PrecioPorDia,
              CantidadDormitorios: selectedAlojamiento.CantidadDormitorios,
              CantidadBanios: selectedAlojamiento.CantidadBanios,
              Estado: selectedAlojamiento.Estado,
              TipoAlojamiento: selectedAlojamiento.TipoAlojamiento
            }}
            validationSchema={validationSchema}
            onSubmit={handleUpdate}
          >
            {({ isSubmitting }) => (
              <Form>
                <div>
                  <label>Título:</label>
                  <Field type="text" name="Titulo" />
                  <ErrorMessage name="Titulo" component="div" className="error" />
                </div>
                <div>
                  <label>Descripción:</label>
                  <Field type="text" name="Descripcion" />
                  <ErrorMessage name="Descripcion" component="div" className="error" />
                </div>
                <div>
                  <label>Latitud:</label>
                  <Field type="number" step="0.00000001" name="Latitud" />
                  <ErrorMessage name="Latitud" component="div" className="error" />
                </div>
                <div>
                  <label>Longitud:</label>
                  <Field type="number" step="0.00000001" name="Longitud" />
                  <ErrorMessage name="Longitud" component="div" className="error" />
                </div>
                <div>
                  <label>Precio por Día:</label>
                  <Field type="number" step="0.01" name="PrecioPorDia" />
                  <ErrorMessage name="PrecioPorDia" component="div" className="error" />
                </div>
                <div>
                  <label>Cantidad de Dormitorios:</label>
                  <Field type="number" name="CantidadDormitorios" />
                  <ErrorMessage name="CantidadDormitorios" component="div" className="error" />
                </div>
                <div>
                  <label>Cantidad de Baños:</label>
                  <Field type="number" name="CantidadBanios" />
                  <ErrorMessage name="CantidadBanios" component="div" className="error" />
                </div>
                <div>
                  <label>Estado:</label>
                  <Field as="select" name="Estado">
                    <option value="Disponible">Disponible</option>
                    <option value="Reservado">Reservado</option>
                  </Field>
                  <ErrorMessage name="Estado" component="div" className="error" />
                </div>
                <div>
                  <label>Tipo de Alojamiento:</label>
                  <Field type="text" name="TipoAlojamiento" />
                  <ErrorMessage name="TipoAlojamiento" component="div" className="error" />
                </div>
                <button type="submit" disabled={isSubmitting}>Actualizar</button>
                <button type="button" onClick={() => setSelectedAlojamiento(null)}>Cancelar</button>
              </Form>
            )}
          </Formik>
        </div>
      ) : (
        <div>
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
                      <button onClick={() => handleSelectAlojamiento(alojamiento)}>Actualizar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No hay alojamientos disponibles</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ActualizarAlojamiento;
