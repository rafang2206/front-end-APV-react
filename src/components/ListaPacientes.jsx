import { useState, useEffect } from 'react';
import usePacientes from '../hooks/usePacientes';
import { Paciente } from '../components/index';

const ListaPacientes = () => {

  const { pacientes } = usePacientes();



  return (
    <>
      {pacientes.length ? (
        <>
          <h2 className='text-4xl text-gray-700 text-center font-bold'>Lista de tus pacientes</h2>
          <p className='text-gray-500 text-2xl font-bold mb-10 text-center mt-5'>Administra y controla tu registro de <span className='text-gray-700 font-black'>pacientes</span></p>
        </>
      ) : (
        <>
          <h2 className='text-4xl text-gray-700 text-center font-bold'>No tienes pacientes</h2>
          <p className='text-gray-500 text-2xl font-bold mb-10 text-center mt-5'>Agrega tus pacientes y <span className='text-gray-700 font-black'>administra</span> sus citas</p>
        </>
      ) }
      
      {pacientes.map(paciente => (
        <Paciente 
          key={paciente._id}
          paciente={paciente}
        />
      ))}



    </>
  )
}

export default ListaPacientes