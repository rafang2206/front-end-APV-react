import usePacientes from '../hooks/usePacientes';
import formatearFecha from '../utils/formatearFecha';

const Paciente = ({paciente}) => {

    const { eliminarPaciente, setPaciente } = usePacientes();

    const { nombre, propietario, email, fecha, sintomas, _id } = paciente

    

  return (
    <>
        <div className="mx-5 my-10 p-3 bg-white shadow-lg rounded-xl">
            <div className="flex gap-3">
                <label className="text-lg text-gray-500 font-bold uppercase">Nombre Paciente:</label>
                <p className="text-lg text-black font-normal normal-case">{nombre}</p>
            </div>
            <div className="flex gap-3">
                <label className="text-lg text-gray-500 font-bold uppercase">Nombre Propietario:</label>
                <p className="text-lg text-black font-normal normal-case">{propietario}</p>
            </div>
            <div className="flex gap-3">
                <label className="text-lg text-gray-500 font-bold uppercase">Email:</label>
                <p className="text-lg text-black font-normal normal-case">{email}</p>
            </div>
            <div className="flex gap-3">
                <label className="text-lg text-gray-500 font-bold uppercase">Fecha de cita:</label>
                <p className="text-lg text-black font-normal normal-case">{formatearFecha(fecha)}</p>
            </div>
            <div className="flex gap-3">
                <label className="text-lg text-gray-500 font-bold uppercase">Sintomas:</label>
                <p className="text-lg text-black font-normal normal-case">{sintomas}</p>
            </div>
            <div className="flex justify-between mt-5">
                <button className="bg-indigo-600 text-white font-bold uppercase rounded-xl p-2 hover:cursor-pointer hover:bg-indigo-500"
                    onClick={e => setPaciente(paciente)}
                >Editar</button>
                <button className="bg-red-600 text-white font-bold uppercase rounded-xl p-2 hover:cursor-pointer hover:bg-red-700"
                    onClick={e => eliminarPaciente(_id)}
                >Eliminar</button>
            </div>
            
        </div>
    </>
  )
}

export default Paciente