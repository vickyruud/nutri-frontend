import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './app.css'
import NavBar from './components/NavBar';
import RecipeList from './components/RecipeList';
import Modal from './components/Modal';
import { Route, Routes } from 'react-router-dom';
import MyRecipes from './components/MyRecipes';
import Home from './components/Home';
import ViewRecipe from './components/ViewRecipe';



export const ThemeContext = React.createContext()



function App() {
  
  const [recipes, setRecipes] = useState([]);
  const [dark, setDark] = useState(localStorage.getItem('theme') || 'light');
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
  const [modalType, setModalType] = useState('')
  const [error, setError] = useState(false);


  const themeContextValue = {
    dark,
    setDark,
    error,
    setError
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

  //fetches all recipes
  useEffect(() => {
    axios.get('/recipes', {
      headers: {
        "Content-type": "application/json"
      }
    })
      .then((res) => {
        setRecipes(res.data);
        localStorage.setItem('recipes', JSON.stringify(res.data));
    })
  }, [])

  //allows the user to login
  const login = (data) => {

    axios.post('/login', 
      data
    ).then((res) => {
      setUser(res.data.user)
      localStorage.setItem("token", res.data.jwt)
      localStorage.setItem("user", JSON.stringify(res.data.user))
      setShowModal(false);
      setError(false);
    })
      .catch(err => {
        setError(err.response.data.errors);
    })
  }

  //allows a new user to register
  const register = (data) => {
    axios.post('/users', 
      data
    ).then((res) => {
      setUser(res.data.user)
      localStorage.setItem("token", res.data.jwt)
      localStorage.setItem("user", JSON.stringify(res.data.user))
      setShowModal(false);
    })
      .catch(err => {
        setError(err.response.data.errors);
    })
  }



  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser('')
  }

  useEffect(() => {
    if (!user) {
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
    }
  },[user])

  return (
    
    <ThemeContext.Provider value={themeContextValue}>
      <NavBar register={register} setShowModal={setShowModal} user={user} logout={logout} setModalType={setModalType} />
        <Modal register={register} modalType={modalType} showModal={showModal} setShowModal={setShowModal} login={login} />
      <div className='flex flex-col items-center backdrop-blur-sm'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/recipes' element={<RecipeList recipes={recipes} />} />
          <Route path='/recipes/:id' element={<ViewRecipe recipes={recipes}/>}/>  
          <Route path='/my-recipes' element={<MyRecipes recipes={recipes} user={user} />} />
        </Routes>
      </div>
      </ThemeContext.Provider>
      
  )
}

export default App