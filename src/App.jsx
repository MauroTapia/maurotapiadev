import './App.css'
import { Outlet } from "react-router"
import Header from './modules/header'
import MainComponent from './pages/main/Description'
import Home from './pages/home/Home'
import Footer from './modules/footer'

function App() {

  return (
    <>
      <div className='imagen'>
        <Header />
        <Outlet />
      </div>
    </>
  )
}

export default App
