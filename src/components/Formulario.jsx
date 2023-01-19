import { useState, useEffect } from 'react';
import axios from 'axios';
import usePacientes from '../hooks/usePacientes';
import useAuth from '../hooks/useAuth';
import { Alert } from './index';

const Formulario = () => {

  const { alerta, setAlerta } = useAuth();
  const { guardarUsuario, setPacientes, paciente } = usePacientes();

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [id, setId] = useState(null);

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if([nombre, propietario, email, fecha, sintomas].includes('')){
      setAlerta({ msg:'todos los campos deben estar llenos', type: 'error', alert: true });
      return;
    }
    guardarUsuario({nombre, propietario, email, fecha, sintomas, id})
    
  }

  useEffect(() => {
    if(paciente?.nombre){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
      setId(paciente._id)
    }
  }, [paciente])

  return (
    <>
      <h2 className='text-4xl text-gray-700 text-center font-bold'>Administrador de pacientes</h2>
      <p className='text-gray-500 text-2xl font-bold mb-10 text-center mt-5'>Agrega un nuevo <span className='text-gray-700 font-black'>Paciente</span></p>

      
      <button className="bg-indigo-600 block w-full text-white font-bold uppercase rounded-xl p-2 cursor-pointer hover:bg-indigo-500 mt-5 md:hidden" onClick={() => setMostrarFormulario(!mostrarFormulario)}>{mostrarFormulario ? 'Ocultar Formulario' : 'Mostrar Formulario'}</button>
      
      
      {alerta.alert ? <Alert alerta={alerta}/> : null}
      <form className={`${mostrarFormulario ? 'block' : 'hidden'} p-2 bg-white shadow-lg rounded-lg md:block`}
      onSubmit={handleSubmit}
      >
        
        <div>
          <label htmlFor="nombre" className="uppercase text-gray-500 block text-xl font-bold">Nombre</label>
          <input className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" type="text" placeholder="Nombre de la mascota"
          value={nombre} onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="propietario" className="uppercase text-gray-500 block text-xl font-bold">Propietario</label>
          <input className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" type="text" placeholder="Nombre del propietario"
          value={propietario} onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email" className="uppercase text-gray-500 block text-xl font-bold">Email</label>
          <input className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" type="email" placeholder="Email del propietario"
          value={email} onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="fecha" className="uppercase text-gray-500 block text-xl font-bold">Fecha de Alta</label>
          <input className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" type="date"
          value={fecha} onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="sintomas" className="uppercase text-gray-500 block text-xl font-bold">Sintomas</label>
          <textarea className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" placeholder="Agrega los sintomas"
          value={sintomas} onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input type='submit' value={id ? 'Guardar Cambios' : 'Agregar Paciente'} className="bg-indigo-600 block w-full text-white font-bold uppercase rounded-xl p-2 cursor-pointer hover:bg-indigo-500 mt-5" />
      </form>
    
    </>
  )
}

export default Formulario