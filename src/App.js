
import './App.css'
import Loadind from './Loading'
import Tour from './Tour'
import Data from './Data'
import Loading from './Loading'
import { useEffect, useState } from 'react'
const App = () => {
  
  const [tours,setTours]=useState([])
  const [loading,setLoading]=useState(true)
  const fetchData =()=> {
    setTours(Data)
    setLoading(false)
  }
  useEffect(()=>{
    fetchData()
  },[])
  const remove =(id) => {
    var arr=tours.filter(e=>e.id!=id)
    setTours(arr)
  }
  if(loading){
    return(
      <Loading/>
    )

  }
  

  return (
    <>
    <div className='App'>
      <Tour tours={tours} remove={remove}/>
    </div>
    </>
  )
}

export default App;
