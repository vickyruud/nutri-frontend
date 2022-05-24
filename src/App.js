import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './app.css'
import { ThemeProvider } from './components/ThemeContext';
import Toggle from './components/ThemeToggle';
import NavBar from './components/NavBar';

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
    <ThemeProvider>
      <NavBar/>
      <h1 className="text-3xl text-red-500 font-bold underline dark:bg-gray-800">
      Recipes    
      </h1>
    </ThemeProvider>
  )
}

export default App