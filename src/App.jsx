import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './app.css'
import NavBar from './components/NavBar';
import RecipeList from './components/RecipeList';
import Modal from './components/Modal';
import { Outlet, Route, Routes } from 'react-router-dom';
import MyRecipes from './components/MyRecipes';



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

  const login = (user) => {

    const data = user
    axios.post('/login', 
      data
    ).then((res) => {
      console.log(res.data.jwt)
      setUser(res.data.user)
      localStorage.setItem("token", res.data.jwt)
      setShowModal(false);
    })
      .catch(err => {
        console.log(err);
    })
  }

  const logout = () => {
    localStorage.removeItem('token');
    setUser('')
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token !== null) {
      axios.get('/authorize',
        {
          headers: {
            "Authorization": `Bearer ${token}`            
          }
      })
        .then((res) => {
          setUser(res.data);
        })
      .catch((error) => console.log(error))
    } else {
      setUser('');
    }
  },[])

  return (
    
    <ThemeContext.Provider value={themeContextValue}>
      <NavBar setShowModal={setShowModal} user={user} logout={logout} />
      <div className='flex flex-col items-center'>
        <Modal showModal={showModal} setShowModal={setShowModal} login={login} />
        <Routes>
          <Route path='/' element={<RecipeList recipes={recipes} />} />
          <Route path='/my-recipes' element={<MyRecipes recipes={recipes} user={user} />} />
        </Routes>
        <Outlet />
      </div>
      </ThemeContext.Provider>
      
  )
}

export default App