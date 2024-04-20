import AppRoutes from './routes'
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

function App() {
  
  useEffect(() => {
    Aos.init({
      duration: 1000})
  },[])

  return (
    <AppRoutes/>
  )
}

export default App
