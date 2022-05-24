import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './app.css'
import NavBar from './components/NavBar';
import ToggleTheme from './components/ToggleTheme';
import RecipeCard from './components/RecipeCard';

export const ThemeContext = React.createContext()

function App() {

  const [dark, setDark] = useState('light')

  const themeContextValue = {
    dark,
    setDark
  }


  useEffect(() => {
    localStorage.setItem('theme', dark)
  }, [dark])


  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('/recipes')
      .then((res) => {
        setRecipes(res.data);
        console.log(res.data[0].name)
    })
  }, [])



  return (
    <ThemeContext.Provider value={themeContextValue}>
      <NavBar />
      <h1 className="text-3xl  font-bold underline dark:bg-gray-800 dark:text-gray-100">
      Recipes    
      </h1>
      <RecipeCard/>
    </ThemeContext.Provider>
  )
}

export default App