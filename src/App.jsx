import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './app.css'
import NavBar from './components/NavBar';
import RecipeList from './components/RecipeList';
import Modal from './components/Modal';

export const ThemeContext = React.createContext()

function App() {

  const [dark, setDark] = useState(localStorage.getItem('theme') || 'light');
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null);


  const themeContextValue = {
    dark,
    setDark
  }

  //changes theme 
  useEffect(() => {
    localStorage.setItem('theme', dark)
    if (dark === 'light') {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add(dark)
    }
  }, [dark])

  //maintains theme on refresh
  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme != null) setDark(theme)
  }, []);

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('/recipes')
      .then((res) => {
        setRecipes(res.data);
    })
  }, [])



  return (
    <ThemeContext.Provider value={themeContextValue}>
      <NavBar setShowModal={setShowModal} />
      <div className='flex flex-col items-center'>    
        <Modal showModal={showModal} setShowModal={setShowModal}/>
        <RecipeList recipes={recipes}/>
      </div>
    </ThemeContext.Provider>
  )
}

export default App