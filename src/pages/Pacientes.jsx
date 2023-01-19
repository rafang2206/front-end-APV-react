import usePacientes from '../hooks/usePacientes';
import { Paciente } from '../components/index';
import formatearFecha from '../utils/formatearFecha';

const Pacientes = () => {

  const { pacientes, eliminarPaciente } = usePacientes();


  return (
    <>
    
      <h2 className="text-center mt-10 text-4xl text-gray-600 font-black">Tu lista de Pacientes</h2>

      <div className='container mx-auto w-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center py-10 gap-5'>
      {pacientes.map(paciente => (
        
        <div className='py-5 border  border-gray-300 shadow-lg p-3 bg-white' key={paciente._id}>
          <p className=' text-gray-500 uppercase font-black'>Nombre: <span className='text-black normal-case font-normal'>{paciente.nombre}</span></p>
          <p className=' text-gray-500 uppercase font-black'>Propietario: <span className='text-black normal-case font-normal'>{paciente.propietario}</span></p>
          <p className=' text-gray-500 uppercase font-black'>Email: <span className='text-black normal-case font-normal'>{paciente.email}</span></p>
          <p className=' text-gray-500 uppercase font-black'>Fecha: <span className='text-black normal-case font-normal'>{formatearFecha(paciente.fecha)}</span></p>
          <p className=' text-gray-500 uppercase font-black'>Sintomas: <span className='text-black normal-case font-normal'>{paciente.sintomas}</span></p>
          <button className='bg-indigo-600 w-full text-white font-bold uppercase rounded-xl p-2 hover:cursor-pointer hover:bg-indigo-500 mt-5'
            onClick={e => eliminarPaciente(paciente._id)}
          >Eliminar Cita</button>
        </div>
        
      ))}
      </div>
    
    
    </>
  )
}

export default Pacientes