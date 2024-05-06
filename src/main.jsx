// External Libs
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Local Modules
import { GlobalStyled } from './GlobalStyled';
import Home from './pages/Home/Home';
import { Search } from './pages/Search/Search';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { Authentication } from './pages/Authentication/Authentication';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './pages/Profile/Profile';
import UserProvider from './Context/UserContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />, 
    children: [
      {
        path: "/", // carregará juntamente/abaixo da rota principal "/" do Navbar
        element: <Home />,
      }, 
      {
        path: "/search/:title", // carregará juntamente/abaixo da rota principal "/" do Navbar
        element: <Search />,
      },
      {
        path: "/profile", // carregará juntamente/abaixo da rota principal "/" do Navbar
        element: <Profile />,
      }
    ],
  },
  {
    path: "/auth",
    element: <Authentication />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyled /> {/* Tudo abaixo do GlobalStyled receberá o CSS global */}
    {/* Todas as rotas são filhas do "UserProvider", ou seja, terão acesso aos dados do user */}
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>,
)
