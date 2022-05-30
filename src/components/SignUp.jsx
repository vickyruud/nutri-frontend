import React, { useState, useContext } from "react";
import { ThemeContext } from "../App";
import Alert from "./Alert";

function SignUp({ setShowModal, register  }) {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error, setError } = useContext(ThemeContext);


  const onSubmit = (event) => {
    event.preventDefault();
    
    const user = {
      username,
      password,
      email
    }
    register(user);
  }


  const closeModal = (event) => {
    event.preventDefault();
    setShowModal(false);
    setError(false);
  }

  return (
    <div className="flex items-center justify-center bg-gray-200 dark:bg-teal-800">
      <div className="px-8 py-6 text-left bg-gray-200 shadow-2xl dark:bg-teal-900">
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 h-20 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-center">Register a new account</h3>
        <form onSubmit={onSubmit}>
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                placeholder="Username"
                onChange={(event) => setUsername(event.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900 dark:text-gray-900"
              />              
            </div>
             <div className="mt-4">
              <label className="block">Email</label>
              <input
                type="email"
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900 dark:text-gray-900"
              />
            </div>
            <div className="mt-4">
              <label className="block">Password</label>
              <input
                type="password"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900 dark:text-gray-900"
              />
            {error ? <Alert/> : null}
            </div>
            <div className="flex items-baseline justify-between">
              <button className="mt-2 bg-green-500 p-2 px-4 rounded-full font-semibold transition-all hover:bg-green-800">
                Register
              </button>
              <button onClick={closeModal} className="mt-2 bg-green-500 p-2 px-4 rounded-full font-semibold transition-all hover:bg-green-800">
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
