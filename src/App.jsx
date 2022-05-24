import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './app.css'
import NavBar from './components/NavBar';
import RecipeCard from './components/RecipeCard';
import RecipeList from './components/RecipeList';

export const ThemeContext = React.createContext()

function App() {

  const [dark, setDark] = useState('light')

  const themeContextValue = {
    dark,
    setDark
  }

  useEffect(() => {
    localStorage.setItem('theme', dark)
    console.log(dark)
    if (dark === 'light') {
      console.log('light')
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add(dark)
    }
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
      <h1 className="text-3xl  font-bold underline">
      Recipes    
      </h1>
      <RecipeList recipes={recipes}/>
    </ThemeContext.Provider>
  )
}

export default App