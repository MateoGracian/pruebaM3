import './reset.css'
import Home from './views/Home/Home'
import MisTurnos from './views/MisTurnos/MisTurnos'
import NavBar from './components/NavBar/NavBar'
import Register from './views/Register/Register'
import Login from './views/Login/Login'
import { Routes, Route } from 'react-router-dom'
import NewAppointmentPage from './views/NewAppoinmentPage/NewAppointmentPage'
import Servicios from './views/Servicios/Servicios'
import Footer from './components/Footer/Footer'

const App = () => {
  
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path='/servicios' element={<Servicios/>}/>
        <Route path="/mis-turnos" element={<MisTurnos/>}/>
        <Route path="/agendar-turno" element={<NewAppointmentPage/>}/>
      </Routes>
      <Footer/> 
    </>
  )
}

export default App
