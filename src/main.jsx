import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Services from './components/Services/Services.jsx';
import ErrorMessage from './components/ErrorMessage/ErrorMessage.jsx';
import Users from './components/Users/Users.jsx';
import UserDetail from './components/UserDetail/UserDetail.jsx';
import LandingPage from './components/LandingPage/LandingPage.jsx';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App></App>,
      errorElement: <ErrorMessage></ErrorMessage>,
      children: [
        {
          path: '/',
          element: <LandingPage></LandingPage>,
          loader: () => fetch('https://openapi.programming-hero.com/api/ai/tools')
        },
        {
          path: 'about',
          element: <About></About>
        },
        {
          path: 'users',
          element: <Users></Users>,
          loader: () => fetch('https://jsonplaceholder.typicode.com/users')
        },
        {
          path: 'user/:userid',
          element: <UserDetail></UserDetail>,
          loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`)
        },
        {
          path: 'services',
          element: <Services></Services>
        },
        {
          path: 'contact',
          element: <Contact></Contact>
        }
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
