import { useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Alert } from '../components/index';
import { Input, BtnSubmit } from '../components/index';
import useAuth from '../hooks/useAuth';

const ConfirmarNuevoPassword = () => {

  const { alerta, setAlerta} = useAuth();

  const [ password, setPassword] = useState('');
  const [ repeatPassword, setRepeatPassword] = useState('');


  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();



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

    try{
        const url = `${import.meta.env.VITE_BACKEND_URL}/veterinarios/recuperar-password/${id}`;
        const { data } = await axios.post(url, { password });
        setAlerta({msg: data.msg, type: 'success', alert: true});
        setTimeout(() => {
            navigate('/');
        }, [3000])
    }catch(error){
        setAlerta({msg: error.response.data.msg, type: 'error', alert: true});
    }
    
  }



  return (
    <>
      <div className="my-5">
        <h1 className="text-indigo-600 text-6xl font-bold">Crea una nueva contraseña e <span className="font-extrabold text-gray-900">Inicia Sesión</span></h1>
      </div>
      <div className='flex flex-col justify-center'>
        {alerta.alert ? <Alert alerta={alerta} /> : null}
        <form
            onSubmit={handleSubmit}
        >
            <Input 
                title="password"
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

export default ConfirmarNuevoPassword;