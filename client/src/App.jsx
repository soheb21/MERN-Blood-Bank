import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import ProtectedComponent from './components/routes/ProtectedComponent'
import PubliComponent from './components/routes/PubliComponent'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getUserAsync } from './redux/features/auth/authAction'
//Add lazy loading



function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserAsync());
  }, [])


  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <ProtectedComponent>
              <Home />
            </ProtectedComponent>
          } />
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
        </Routes>

      </BrowserRouter>
    </>

  )
}

export default App
