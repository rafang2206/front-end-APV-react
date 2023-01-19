import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Input, BtnSubmit, Alert } from '../components/index';
import useAuth from '../hooks/useAuth';

const Registrar = () => {

  const { alerta, setAlerta} = useAuth();

  const [ nombre, setNombre] = useState('');
  const [ email, setEmail] = useState('');
  const [ password, setPassword] = useState('');
  const [ repeatPassword, setRepeatPassword] = useState('');


  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    if([nombre, email, password, repeatPassword].includes('')){
      setAlerta({msg: 'todos los campos deben llenarse', type: 'error', alert: true})
      return;
    }

    if(password !== repeatPassword){
      setAlerta({msg: 'Las contraseñas no coinciden', type: 'error', alert: true})
      return;
    }

    if(password.length < 6){
      setAlerta({msg: 'La contraseña debe ser igual o mayor a 6 caracteres', type: 'error', alert: true})
      return;
    }
    try {
      const url = `${import.meta.env.VITE_BACKEND_URL}/veterinarios`;
      const response = await axios.post(url, { nombre, email, password});
      setAlerta({msg: 'Cuenta creada exitosamente revisa tu Email', type: 'success', alert: true})
      setTimeout(() => {
        navigate('/')
      }, [2000]) 
    } catch (error) {
      setAlerta({msg: error.response.data.msg, type: 'error', alert: true}) 
    }
  }


  

  return (
    <>
      <div className='my-5'>
        <h2 className="text-6xl text-indigo-600 font-bold">Registrate y administra tus <span className="text-gray-900 text-extrabold">Pacientes</span></h2>
      </div>
      <div className='my-5 bg-white px-5 py-5 shadow-lg rounded-xl'>
        {alerta.alert ? <Alert alerta={alerta}/> : null}
        <form 
          onSubmit={handleSubmit}
        >
          <Input
            title="nombre"
            type="text"
            placeholder="ingresa tu nombre"
            value={nombre}
            handleChangeValue={setNombre}
          />
          <Input
            title="email"
            type="email"
            placeholder="ingresa tu email"
            value={email}
            handleChangeValue={setEmail}
          />
          <Input
            title="password"
            type="password"
            placeholder="password"
            value={password}
            handleChangeValue={setPassword}
          />
          <Input
            title="Repite tu password"
            type="password"
            placeholder="password"
            value={repeatPassword}
            handleChangeValue={setRepeatPassword}
          />
          <BtnSubmit
            btnValue="Registrar"
            btnType="submit"
          />
        </form>
        

        <nav className='lg:flex lg:justify-between mt-10 gap-2'>
          <a onClick={() => navigate('/')} className="text-indigo-500 text-xs hover:cursor-pointer block text-center">¿Ya tienes una cuenta? <span className='font-bold'>Inicia Sesión</span>
          </a>
        
          <a onClick={() => navigate('/recuperar-password')} className="text-indigo-500 text-xs hover:cursor-pointer block text-center">¿Olvidaste tu password? <span className='font-bold'>Recuperalo</span>
          </a>
        </nav>


      </div>
    </>
  )
}

export default Registrar