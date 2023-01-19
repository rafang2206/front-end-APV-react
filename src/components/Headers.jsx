import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Headers = () => {

  const { cerrarSesion } = useAuth();

  return (
    <header className='py-10 bg-indigo-500'>
      <div className='container mx-auto flex flex-col lg:flex-row justify-between items-center gap-4'>
        <Link to='/admin'><h1 className='text-center text-3xl text-indigo-200'>Admin de pacientes <span className='text-white font-black'>Veterinaria</span></h1></Link>
        <nav className='flex flex-col lg:flex-row items-center gap-4'>
          <Link to='/admin/pacientes' className='text-sm text-indigo-200 hover:text-indigo-300 font-black'>Pacientes</Link>
          <Link to='/admin/perfil' className='text-sm text-indigo-200 hover:text-indigo-300 font-black'>Perfil</Link>
          <button className='bg-indigo-700 hover:bg-indigo-600 text-white p-3 rounded-lg uppercase text-xs font-black'
          onClick={cerrarSesion}
          >Cerrar Sesión</button>
        </nav>
      </div>
    </header>
  )
}

export default Headers