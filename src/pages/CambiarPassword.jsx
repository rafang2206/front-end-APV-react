import { useState } from 'react'
import axios from 'axios';
import useAuth from '../hooks/useAuth';
import { NavPerfil, Input, BtnSubmit } from '../components/index';
import { Alert } from '../components/index.js';

const CambiarPassword = () => {

  const [ password, setPassword] = useState('');
  const [ repeatPassword, setRepeatPassword] = useState('');

  const { auth, alerta, setAlerta } = useAuth();


  const handleSubmit = async(e) => {
    e.preventDefault();

    if(password !== repeatPassword){
        setAlerta({msg: 'El password no se repitio correctamente', type: 'error', alert: true});
        return;
    }

    if(password.length < 6){
        setAlerta({msg: 'El password debe ser mayor a 6 caracteres', type: 'error', alert: true});
        return;
    }

    const token = localStorage.getItem('token');

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }

    try{
      const url = `${import.meta.env.VITE_BACKEND_URL}/veterinarios/perfil/${auth._id}`;
        const { data } = await axios.post(url, { password }, config);
        setAlerta({ msg: data.msg, type: 'success', alert: true })
        
    }catch(error){
      setAlerta({ msg: error.response.data.msg, type: 'error', alert: true })
    }
    
  }


  return (
    <>
      <NavPerfil/>
        <div className='container mx-auto flex flex-col items-center'>
          <h2 className='text-center mt-10 text-4xl text-gray-600 font-bold'>Cambia tu Contraseña</h2>
          {alerta.alert ? <Alert alerta={alerta}/> : null}
          <form className='w-full md:w-4/12 mt-10'
            onSubmit={handleSubmit}
          >
            <Input 
                title="Nuevo password"
                type="password"
                placeholder="ingresa tu password"
                value={password}
                handleChangeValue={setPassword}
            />
            <Input 
                title="Repite tu password"
                type="password"
                placeholder="repite tu password"
                value={repeatPassword}
                handleChangeValue={setRepeatPassword}
            />
            <BtnSubmit
                btnValue="Cambiar password"
                btnType="submit"
            />
          </form>
          
        </div>
        
    </>
  )
}

export default CambiarPassword