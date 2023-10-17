import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './components/Routes/Routes'
// import AuthProvider from './components/Providers/AuthProvider'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

// Initialize AOS with desired options
AOS.init({
  duration: 1000, // Animation duration in milliseconds
  once: true, // Only trigger the animation once
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AuthProvider> */}
    <RouterProvider router={router}></RouterProvider>
    {/* </AuthProvider> */}
  </React.StrictMode>,
)
