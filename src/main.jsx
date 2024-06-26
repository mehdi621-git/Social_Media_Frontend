import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ListPost from './listpost.jsx'
import CreatePost from './CreatePost.jsx'
import LogIn from './login.jsx'

const router = createBrowserRouter([
  {path : "/" , element : <App/> , 
  children :[
  {path : "/" , element : <ListPost/>},
  {path : "/create-post", element : <CreatePost/>},
  {path : "/log-in" , element : <LogIn/>}
  ]
}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}></RouterProvider>
  </React.StrictMode>,
)
