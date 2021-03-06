import React, { useEffect, useState } from "react";
import axios from "axios";
import "./app.css";
import NavBar from "./components/NavBar";
import RecipeList from "./components/RecipeList";
import Modal from "./components/Modal";
import { Route, Routes } from "react-router-dom";
import MyRecipes from "./components/MyRecipes";
import Home from "./components/Home";
import ViewRecipe from "./components/ViewRecipe";
import { fetchComments, fetchRecipes, fetchUsers } from "./helpers/getData";
import { deleteComment } from "./helpers/deleteData";
import { saveComment, saveRecipe } from "./helpers/saveData";
import NewRecipe from "./components/NewRecipe";

export const AppContext = React.createContext();

function App() {
  const [recipes, setRecipes] = useState([]);
  const [dark, setDark] = useState(localStorage.getItem("theme") || "light");
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  // eslint-disable-next-line
  const [allUsers, setAllUsers] = useState([]);
  const [modalType, setModalType] = useState("");
  const [error, setError] = useState(false);
  const [comments, setComments] = useState([]);

  //changes theme
  useEffect(() => {
    localStorage.setItem("theme", dark);
    if (dark === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add(dark);
    }
  }, [dark]);

  //maintains theme on refresh
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme != null) setDark(theme);
  }, []);

  //fetches all recipes, comments and users
  useEffect(() => {
    fetchComments()
      .then((res) => {
        setComments(res);
        localStorage.setItem("comments", JSON.stringify(res));
      })
      .catch((error) => {
        console.log(error);
      });

    fetchRecipes()
      .then((res) => {
        setRecipes(res);
        localStorage.setItem("recipes", JSON.stringify(res));
      })
      .catch((error) => {
        console.log(error);
      });

    fetchUsers()
      .then((res) => {
        setAllUsers(res);
        localStorage.setItem("users", JSON.stringify(res));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //allows the user to login
  const login = (data) => {
    axios
      .post("/login", data)
      .then((res) => {
        setUser(res.data.user);
        localStorage.setItem("token", res.data.jwt);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setShowModal(false);
        setError(false);
      })
      .catch((err) => {
        setError(err.response.data.errors);
      });
  };

  //allows a new user to register
  const register = (data) => {
    axios
      .post("/users", data)
      .then((res) => {
        setUser(res.data.user);
        localStorage.setItem("token", res.data.jwt);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setShowModal(false);
      })
      .catch((err) => {
        setError(err.response.data.errors);
      });
  };

  //handles logout
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser("");
  };

  //maintains user login on refresh
  useEffect(() => {
    if (!user) {
      const token = localStorage.getItem("token");
      if (token !== null) {
        axios
          .get("/authorize", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            setUser(res.data);
          })
          .catch((error) => console.log(error));
      } else {
        setUser("");
      }
    }
  }, [user]);

  //handle comment delete
  const handleDeleteComment = (id) => {
    deleteComment(id)
      .then((res) => {
        setComments(res.data);
        localStorage.setItem("comments", JSON.stringify(res));
        console.log("deleted comment", id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Add new comment
  const handleNewComment = (comment) => {
    saveComment(comment)
      .then((res) => {
        setComments(res);
        localStorage.setItem("comments", JSON.stringify(res));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //creates new recipe
  const createNewRecipe = (recipe) => {
    saveRecipe(recipe).then((res) => {
      setRecipes(res);
      localStorage.setItem("Recipes", JSON.stringify(res));
      setShowModal(false)
    });
  };

  //use context to pass variables to components
  const appContextValue = {
    dark,
    setDark,
    error,
    setError,
    user,
    handleDeleteComment,
    handleNewComment,
    setShowModal,
    showModal,
    setModalType,
    createNewRecipe
  };

  return (
    <AppContext.Provider value={appContextValue}>
      <NavBar
        register={register}
        setShowModal={setShowModal}
        user={user}
        logout={logout}
        setModalType={setModalType}
      />
      <Modal
        register={register}
        modalType={modalType}
        showModal={showModal}
        setShowModal={setShowModal}
        login={login}
      />
      <div className="flex flex-col items-center backdrop-blur-sm dark:bg-cyan-900">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<RecipeList recipes={recipes} />} />
          <Route path="/recipes/new" element={<NewRecipe />} />
          <Route
            path="/recipes/:id"
            element={<ViewRecipe recipes={recipes} comments={comments} />}
          />
          <Route
            path="/my-recipes"
            element={<MyRecipes recipes={recipes} user={user} />}
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
