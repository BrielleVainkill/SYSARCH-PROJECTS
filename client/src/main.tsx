import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Navbar from './components/Nav.jsx'
import Sidebar from './components/Sidebar.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/*
    <Navbar2 />
    <App />
    */}

      <div>
      <Navbar />       
        <div className="flex">
          <div className="w-1/5 top-20">
            <Sidebar />
          </div>
          <div id="container" className="text-gray-800 w-4/5 overflow-y-auto mt-20 mr-10 mb-5 pt-8 px-8 pb-10 dark:border-gray-700 bg-gray-200 border-slate-300 rounded-lg shadow">
            <App />
          </div>
        </div>
      </div>
    
  </React.StrictMode>
)
