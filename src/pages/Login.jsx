import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { Alert } from '../components/index';
import { Input, BtnSubmit } from '../components/index';
import useAuth from '../hooks/useAuth';

const Login = () => {

  const { auth, setAuth, setToken, alerta, setAlerta } = useAuth();

  const [ email, setEmail] = useState('');
  const [ password, setPassword] = useState('');


  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if([email, password].includes('')){
      setAlerta({msg: 'todos los campos deben estar llenos', type: 'error', alert: true});
      return;
    }
    try {
      const url = `${import.meta.env.VITE_BACKEND_URL}/veterinarios/login`;
      const { data } = await axios.post(url, { email, password });
      setAlerta({msg: 'usuario autenticado', type: 'success', alert: true})
      localStorage.setItem('token', data.token);
      setToken(data.token);
      navigate('/admin');
    } catch (error) {
      
      setAlerta({msg: error.response.data.msg, type: 'error', alert: true})
    }
  }



  return (
    <>
      <div className="my-5">
        <h1 className="text-indigo-600 text-6xl font-bold">Inicia Sesión y administra tus <span className="font-extrabold text-gray-900">Pacientes</span></h1>
      </div>
      <div className="my-5 bg-white px-5 py-5 shadow-lg rounded-xl">
        {alerta.alert ? <Alert alerta={alerta}/> : null}
        <form
          onSubmit={handleSubmit}
        >
          <Input 
            title="Email" 
            type="email"
            placeholder="email de registro"
            value={email}
            handleChangeValue={setEmail}
          />
          <Input 
            title="Password" 
            type="password"
            placeholder="ingresa tu password"
            value={password}
            handleChangeValue={setPassword}
          />
          <BtnSubmit
            btnValue="iniciar sesión"
            btnType="submit"
          />
        </form>
        
        <nav className='lg:flex lg:justify-between mt-10 gap-2'>
          <a onClick={() => navigate('/registrar')} className="text-indigo-500 text-xs hover:cursor-pointer block text-center">¿No tienes una cuenta? <span className='font-bold'>Registrate</span>
          </a>
        
          <a onClick={() => navigate('/recuperar-password')} className="text-indigo-500 text-xs hover:cursor-pointer block text-center">¿Olvidaste tu password? <span className='font-bold'>Recuperalo</span>
          </a>
        </nav>
      </div>
    </>
  )
}

export default Login