import { useEffect } from "react"
import { useLocation } from "react-router"
const App = () => {
  const location = useLocation()
  useEffect(()=>{
    console.log('[path]',location.pathname.split('/example')[1])
  },[location])
  return (
    <div className="">app</div>    
  )
}

export default App