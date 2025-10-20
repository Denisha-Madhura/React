import { useState,useEffect, use } from 'react'
import './App.css'

const Card = ({ title }) => {
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false); //first you destructure the state variable and the function to update it

  useEffect(() => {}, [hasLiked]); //dependency array
  // useEffect(() => {}, []); // runs only on the first render 


  return(
    <div className='card' onClick={()=>setCount(count + 1)}>
      <h2>{title}<br/>{count || null}</h2>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? '❤️' : '🤍'}
      </button>
    </div>
  )
}

const App = () => {
  
  return(
    <div className="card-container">
      <Card title="Star Wars"/>
      <Card title="Avatar"/>
      <Card title="The Lion King"/>
      
    </div>
  )
}  


export default App
