import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddCompany from './pages/AddCompany'
import Home from './pages/Home'
import Jobs from './pages/Jobs'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/add-company" element={<AddCompany />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
