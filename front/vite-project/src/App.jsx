import './reset.css'
import Home from './views/Home/Home'
import MisTurnos from './views/MisTurnos/MisTurnos'
import NavBar from './components/NavBar/NavBar'

const App = () => {
  
  return (
    <>
      <NavBar/>
      <Home/>
      <MisTurnos/> 
    </>
  )
}

export default App
