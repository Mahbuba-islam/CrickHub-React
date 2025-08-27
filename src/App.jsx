
import './App.css'
import Footer from './Components/Footer/Footer'
import Headers from './Components/Headers/Headers'
import Players from './Components/Players/Players'
import { ToastContainer} from 'react-toastify'

function App() {


  return (
    <>
    <div>
       <Headers></Headers>
     <Players>
    
     </Players>
       
     <Footer></Footer>
     <ToastContainer/>
    </div>
    
    </>
  )
}

export default App
