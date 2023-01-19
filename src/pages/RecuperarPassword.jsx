import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, BtnSubmit } from '../components/index';
import axios from 'axios';
import { Alert } from '../components/index';
import useAuth from '../hooks/useAuth';

const RecuperarPassword = () => {

  const { alerta, setAlerta} = useAuth();
  
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const url = `${import.meta.env.VITE_BACKEND_URL}/veterinarios/recuperar-password`;
      const { data } = await axios.post(url, { email });
      setAlerta({msg: data.msg, type: 'success', alert: true})
      setTimeout(()=> {
        navigate('/')
      }, [3000])
    } catch (error) {
      setAlerta({msg: error.response.data.msg, type: 'error', alert: true})
    }
  }



  return (
    <>
    
      <div className='my-5'>
        <h1 className="text-6xl text-indigo-600 font-bold">Recupera tu cuenta de <span className="text-black font-extrabold">Usuario</span></h1>
      </div>

      <div className='my-5 bg-white px-5 py-5 shadow-lg rounded-xl'>
        {alerta.alert ? <Alert alerta={alerta}/> : null}
        <form 
          onSubmit={handleSubmit}
        >
          <Input 
          title="ingresa tu email"
          type="email"
          placeholder="ingresa tu email"
          value={email}
          handleChangeValue={setEmail}
          />
          <BtnSubmit
            btnValue="Enviar"
            btnType="submit"
          />
        </form>
        
        <nav className='lg:flex lg:justify-between mt-10 gap-2'>
          <a onClick={() => navigate('/')} className="text-indigo-500 text-xs hover:cursor-pointer block text-center">¿Ya tienes una cuenta? <span className='font-bold'>Inicia Sesión</span>
          </a>
        
          <a onClick={() => navigate('/registrar')} className="text-indigo-500 text-xs hover:cursor-pointer block text-center">¿No tienes una cuenta? <span className='font-bold'>Registrate</span>
          </a>
        </nav>
      </div>

    </>
  )
}

export default RecuperarPassword