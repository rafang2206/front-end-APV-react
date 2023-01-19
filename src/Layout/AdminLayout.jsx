import { Outlet, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { Headers, Footer, Spinner } from '../components/index';

function AdminLayout() {

  const { auth, cargando } = useAuth();
  

  return (
    <>
    {cargando ? <Spinner/>: (
      <>
        <Headers/>
          {auth?._id ? 
            <main className='container mx-auto'>
              <Outlet/> 
            </main>
          : <Navigate to="/"/>}
        <Footer/>
      </>
    )}
      
    </>
  )
}

export default AdminLayout;