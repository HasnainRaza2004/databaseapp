import React from 'react'
import { useParams } from 'react-router-dom'

const Home = () => {
    const params = useParams();
     
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home
