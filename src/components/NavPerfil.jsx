import React from 'react'
import { Link } from 'react-router-dom';


const NavPerfil = () => {
  return (
    <>
        <nav className='flex gap-4 mt-4'>
            <Link className='text-sm text-gray-500' to='/admin/perfil'>Actualizar Perfil</Link>
            <Link className='text-sm text-gray-500' to='/admin/cambiar-password'>Cambiar Contraseña</Link>
        </nav>
    </>
  )
}

export default NavPerfil