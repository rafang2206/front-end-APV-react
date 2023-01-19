import { useState, useEffect, createContext } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({children}) => {

  const navigate = useNavigate();

  const [cargando, setCargando] = useState(true);
  const [auth, setAuth] = useState({});
  const [token, setToken] = useState('');
  const [ alerta, setAlerta] = useState({});
  
  useEffect(() => {
    const autenticarUsuario = async() => {
      const token = localStorage.getItem('token');
      if(!token){
        setCargando(false);
        return
      };

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }

      try{
        const url = `${import.meta.env.VITE_BACKEND_URL}/veterinarios/perfil`;
        const { data } = await axios(url, config);
        setAuth(data.perfil)
      }catch(error){
        console.log(error.response.data.msg)
      }

      setCargando(false);
      navigate('/admin')
    }

    autenticarUsuario()
  }, [token]);


  const cerrarSesion = () => {
    localStorage.removeItem('token');
    setAuth({})
  }

  const actualizarDatos = async (perfil) => {
    
    const token = localStorage.getItem('token');

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }

    try{
      const url = `${import.meta.env.VITE_BACKEND_URL}/veterinarios/perfil/${perfil._id}`;
        const { data } = await axios.put(url, perfil, config);
        console.log(data)
        setAuth(perfil)
    }catch(error){
        console.log(error)
    }
    
  }

  useEffect(() => {
    if(alerta.alert === true){
      const timer = setTimeout(() =>{
        setAlerta({ msg: '', type: '', alert: false })
    }, [3000])

      return () => clearTimeout(timer)
    }
  }, [alerta])

  return (
    <AuthContext.Provider 
      value={{auth, setAuth, cargando, setCargando, setToken, cerrarSesion, actualizarDatos, alerta, setAlerta}}
    >
        {children}
    </AuthContext.Provider>
  )
}

export {
    AuthProvider
}

export default AuthContext;