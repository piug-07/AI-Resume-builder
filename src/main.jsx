import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignInPage from './auth/sign-in/index.jsx'
import Home from './home/index.jsx'
import Dashboard from './dashboard/index.jsx'
import EditResume from './dashboard/resume/[resumeId]/edit/index.jsx'
// import ViewResume from './my-resume/[resumeId]/view/index.jsx'
const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    element:<App/>,
    children:[
      {
        path:'/dashboard',
        element:<Dashboard/>
      },
      {
        path:'/dashboard/resume/:resumeId/edit',
        element:<EditResume/>
      },
    ]
  },
  {
    path:'/auth/sign-in',
    element:<SignInPage/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>,
)
