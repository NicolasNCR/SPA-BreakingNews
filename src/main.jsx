import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import App from './App.jsx';
import { Navbar } from './components/Navbar/Navbar.jsx';
import Home from './pages/Home/Home.jsx';
import { Search } from './pages/Search/Search.jsx';
import { GlobalStyled } from './GlobalStyled.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';

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
        path: "/search", // carregará juntamente/abaixo da rota principal "/" do Navbar
        element: <Search />,
      }
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyled /> {/* Tudo abaixo do GlobalStyled receberá o CSS global */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
