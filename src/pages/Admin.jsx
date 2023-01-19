import { useState, useEffect } from 'react';
import { Formulario, ListaPacientes } from '../components/index';

const Admin = () => {

  


  return (
    <>
    <div className='flex flex-col md:flex-row gap-5 justify-around mt-5'>
      <div className='md:w-1/2'>
        <Formulario />
      </div>
      <div className='md:w-1/2'>
        <ListaPacientes/>
      </div>
    </div>
    </>
  )
}

export default Admin