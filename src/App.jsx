import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthLayout, AdminLayout } from './Layout/index.js';
import { Login, 
        ConfirmarCuenta, 
        RecuperarPassword, 
        Registrar,
        ConfirmarNuevoPassword,
        Admin,
        Pacientes,
        Perfil,
        CambiarPassword
      } from './pages/index.js';
import { AuthProvider } from './context/AuthProvider';
import { PacientesProvider } from './context/PacientesProvider';

function App() {
  

  return (
    <BrowserRouter>
      <AuthProvider>
        <PacientesProvider>
          <Routes>
            <Route path='/' element={<AuthLayout/>}>
              <Route index element={<Login/>} />
              <Route path='registrar' element={<Registrar/>} />
              <Route path='confirmar/:id' element={<ConfirmarCuenta/>} />
              <Route path='recuperar-password' element={<RecuperarPassword/>} />
              <Route path='recuperar-password/:id' element={<ConfirmarNuevoPassword/>} />
            </Route>
            <Route path='/admin' element={<AdminLayout/>}>
              <Route index element={<Admin/>} />
              <Route path='pacientes' element={<Pacientes/>}/>
              <Route path='perfil' element={<Perfil/>} />
              <Route path='cambiar-password' element={<CambiarPassword/>} />
            </Route>
          </Routes>
        </PacientesProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
