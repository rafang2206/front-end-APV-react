import { useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Alert } from '../components/index';
import useAuth from '../hooks/useAuth';

const ConfirmarCuenta = () => {

  const { alerta, setAlerta } = useAuth();

  const [CuentaAprobada, setCuentaAprobada] = useState(false);
  const [cargando, setCargando] = useState(true);

  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();



  useEffect(() => {
    const confirmarCuenta = async () => {
      try{
        const url = `${import.meta.env.VITE_BACKEND_URL}/veterinarios/confirmado/${id}`;
        const { data } = await axios(url);
        setCuentaAprobada(true)
        setAlerta({msg: data.msg, type: 'success', alert: true});
      }catch(error){
        if(!CuentaAprobada){
          setAlerta({msg: error.response.data.msg, type: 'error', alert: true})
        }
      }
      setCargando(false)
    }
    confirmarCuenta();
  }, [])

  
  


  return (
    <>
      <div className="my-5">
        <h1 className="text-indigo-600 text-6xl font-bold">Confirma tu cuenta e <span className="font-extrabold text-gray-900">Inicia Sesión</span></h1>
      </div>
      <div className='flex flex-col justify-center'>
        {!cargando && <Alert alerta={alerta}/>}
        {CuentaAprobada && (
          <a onClick={() => navigate('/')} className="text-center text-indigo-400 font-bold hover:cursor-pointer">Inicia Sesión</a>
        )}
      </div>
      
      
    </>
    
  )
}

export default ConfirmarCuenta;