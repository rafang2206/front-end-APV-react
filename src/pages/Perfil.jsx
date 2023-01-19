import { NavPerfil } from '../components/index';
import useAuth from '../hooks/useAuth';
import { BtnSubmit, Alert } from '../components/index';
import { useState, useEffect } from 'react';

const Perfil = () => {

  const { auth, actualizarDatos, alerta, setAlerta } = useAuth();
  
  const [veterinario, setVeterinario] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, email } = veterinario;

    if([nombre, email].includes('')){
      setAlerta({msg: 'los campos nombre y email son obligatorios', type: 'error', alert: true})
      return;
    }

    actualizarDatos(veterinario)
  };

  useEffect(() => {
    setVeterinario(auth)
  }, [auth])

  
  return (
    <>
    
      <NavPerfil/>
      <div className='container mx-auto'>
        <h2 className='text-center mt-10 text-4xl text-gray-600 font-bold'>Actualiza tus datos</h2>

        <div className='container mx-auto flex flex-col md:flex-row justify-around gap-4'>
          <div className='w-full md:w-2/4'>
            <h2 className='text-center mt-10 text-2xl text-gray-600 font-bold'>Actualiza tus datos</h2>
            <form className='mt-5 flex flex-col gap-5 py-10 bg-white shadow-lg p-5 rounded-lg'
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor='nombre'  className="uppercase text-gray-600 block text-xl font-bold">Nombre:</label>
                <input className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" name='nombre' type='text' placeholder='tu nombre'
                value={veterinario.nombre || ''} onChange={(e) => {setVeterinario({...veterinario, [e.target.name]: e.target.value})}} 
                />
              </div>
              <div>
                <label htmlFor='telefono'  className="uppercase text-gray-600 block text-xl font-bold">Telefono:</label>
                <input className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" name='telefono' type='text' placeholder='tu telefono'
                value={veterinario.telefono || ''} onChange={(e) => {setVeterinario({...veterinario, [e.target.name]: e.target.value})}} 
                />
              </div>
              <div>
                <label htmlFor='email'  className="uppercase text-gray-600 block text-xl font-bold">Email:</label>
                <input className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" name='email' type='email' placeholder='tu email'
                value={veterinario.email || ''} onChange={(e) => {setVeterinario({...veterinario, [e.target.name]: e.target.value})}} 
                />
              </div>
              <div>
                <label htmlFor='web'  className="uppercase text-gray-600 block text-xl font-bold">Sitio web:</label>
                <input className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" name='web' type='text' placeholder='Sitio web'
                value={veterinario.web || ''} onChange={(e) => {setVeterinario({...veterinario, [e.target.name]: e.target.value})}} 
                />
              </div>
              <BtnSubmit
                btnType="submit" 
                btnValue="Actualizar Datos"
              />
              {alerta.alert ? <Alert alerta={alerta}/> : null}
            </form>
          </div>
          <div className='w-full md:w-2/4'>
            <h2 className='text-center mt-10 text-2xl text-gray-600 font-bold'>Perfil del Usuario</h2>
            <div className='mt-5 flex flex-col gap-5 py-10 bg-white shadow-lg p-5 rounded-lg'>
              <p className='text-gray-600 uppercase font-black'>Nombre: <span className='normal-case font-normal'> {auth.nombre}</span></p>
              <p className='text-gray-600 uppercase font-black'>telefono: <span className='normal-case font-normal'> {auth.telefono}</span></p>
              <p className='text-gray-600 uppercase font-black'>Email: <span className='normal-case font-normal'> {auth.email}</span></p>
              <p className='text-gray-600 uppercase font-black'>Pagina Web: <span className='normal-case font-normal'> {auth.web}</span></p>
            </div>
          </div>

        </div>

      </div>
    
    </>
  )
}

export default Perfil