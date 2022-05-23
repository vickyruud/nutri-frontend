import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './app.css'

function App() {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('/recipes')
      .then((res) => {
        setRecipes(res.data);
        console.log(res.data[0].name)
    })
  }, [])



  return (
    <h1 className="text-3xl text-red-500 font-bold underline">
      Recipes
      {recipes ? recipes[0].name : "Hello World"}
    </h1>
  )
}

export default App