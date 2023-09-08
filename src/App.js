import React from 'react';
import Layout from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Error404 from './pages/Error404/Error404';
import About from './pages/About/About';
import HousingSheet from './pages/HousingSheet/HousingSheet';
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="housing/:id" element={<HousingSheet />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}

export default App;