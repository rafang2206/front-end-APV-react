import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const PacientesContext = createContext();

const PacientesProvider = ({children}) => {

    const [pacientes, setPacientes] = useState([]);
    const [paciente, setPaciente] = useState({});


    const guardarUsuario = async (paciente) => {
        const token = localStorage.getItem('token');

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        }
        if(paciente?.id){
          try{
            console.log(paciente)
            const url = `${import.meta.env.VITE_BACKEND_URL}/pacientes/${paciente.id}`;
            const { data } = await axios.put(url, paciente, config);

          }catch(error){
            console.log(error.response.data.msg)
          }
        }else{
          try{
            const url = `${import.meta.env.VITE_BACKEND_URL}/pacientes`;
            const { data } = await axios.post(url, paciente, config);

          }catch(error){
            console.log(error.response.data.msg)
          }
        }
        
    }


    const eliminarPaciente = async(id) => {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }

      try{
        const url = `${import.meta.env.VITE_BACKEND_URL}/pacientes/${id}`;
          const { data } = await axios.delete(url, config);
          console.log(data)
      }catch(error){
        console.log(error.response.data.msg)
      }
    }

    

    useEffect(() => {
      const verClientes = async() => {
        const token = localStorage.getItem('token');

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        }

        try {
          const url = `${import.meta.env.VITE_BACKEND_URL}/pacientes`;
          const { data } = await axios(url, config);
          setPacientes(data)
        } catch (error) {
          console.log(error.response.data.msg)
        }
      }
      verClientes();
    }, [pacientes])

  return (
    <PacientesContext.Provider
    value={{
        guardarUsuario,
        pacientes,
        setPacientes,
        eliminarPaciente,
        paciente,
        setPaciente
    }}
    >
        {children}
    </PacientesContext.Provider>
  )
}

export {
  PacientesProvider
}

export default PacientesContext;