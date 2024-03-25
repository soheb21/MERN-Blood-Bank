import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, lazy, Suspense } from 'react'
const Home = lazy(() => import('./pages/Home'));
const Register = lazy(() => import('./pages/Register'));
const Login = lazy(() => import('./pages/Login'));
const ProtectedComponent = lazy(() => import('./components/routes/ProtectedComponent'));
const PubliComponent = lazy(() => import('./components/routes/PubliComponent'));
import { getUserAsync } from './redux/features/auth/authAction'
import Spinner from './utils/Spinner';
import { useDispatch } from 'react-redux';
import Consumer from './pages/Consumer';
import Donation from './pages/Donation';
import Analytics from './pages/Analytics';
import ProtectedAdmin from './components/routes/ProtectedAdmin';
const Doner = lazy(() => import('./pages/Doner'));
const Hospital = lazy(() => import('./pages/Hospital'));
const Organisation = lazy(() => import('./pages/Organisation'));
const AdminHome = lazy(() => import('./pages/Admin/AdminHome'));
const DonerList = lazy(() => import('./pages/Admin/DonerList'));
const HospitalList = lazy(() => import('./pages/Admin/HospitalList'));
const OrganisationList = lazy(() => import('./pages/Admin/OrganisationList'));
const Err404 = lazy(() => import('./pages/Err404'));
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';







function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserAsync());
  }, [])


  return (

    <>
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
        <ToastContainer/>
          <Routes>
            <Route path='/' element={
              <ProtectedComponent>
                <Home />
              </ProtectedComponent>
            } />
            <Route path='/doner' element={
              <ProtectedComponent>
                <Doner />
              </ProtectedComponent>
            } />
            <Route path='/hospital' element={
              <ProtectedComponent>
                <Hospital />
              </ProtectedComponent>
            } />
            <Route path='/org' element={
              <ProtectedComponent>
                <Organisation />
              </ProtectedComponent>
            } />
            <Route path='/consumer' element={
              <ProtectedComponent>
                <Consumer />
              </ProtectedComponent>
            } />
            <Route path='/donation' element={
              <ProtectedComponent>
                <Donation />
              </ProtectedComponent>
            } />
            <Route path='/analytics' element={
              <ProtectedComponent>
                <Analytics />
              </ProtectedComponent>
            } />

            {/* admin */}
            <Route path='/admin' element={
              <ProtectedAdmin>
                <AdminHome />
              </ProtectedAdmin>
            } />
            <Route path='/donerlist' element={
              <ProtectedAdmin>
                <DonerList />
              </ProtectedAdmin>
            } />
            <Route path='/hospitallist' element={
              <ProtectedAdmin>
                <HospitalList />
              </ProtectedAdmin>
            } />
            <Route path='/orglist' element={
              <ProtectedAdmin>
                <OrganisationList />
              </ProtectedAdmin>
            } />

            {/* auth */}
            <Route path='/login' element={
              <PubliComponent>
                <Login />
              </PubliComponent>
            } />
            <Route path='/register' element={
              <PubliComponent>
                <Register />
              </PubliComponent>
            } />
            <Route path='*' element={<Err404 />} />
          </Routes>
        </Suspense>

      </BrowserRouter>
    </>

  )
}

export default App
