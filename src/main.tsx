import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import App from './App.tsx'
import './index.css'
import RootLayout from './routes/RootLayout.tsx'
import HomePage from './routes/HomePage.tsx'
import "@radix-ui/themes/styles.css";
const router = createBrowserRouter([{
  path: '/',
  element: <RootLayout />,
  children: [
    {
      path: '/',
      element: <App />
    },
    {
      path: '/home',
      element: <HomePage />
    }
  ]
},])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
