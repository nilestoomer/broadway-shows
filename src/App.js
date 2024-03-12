import './App.css';
import Home from "./screens/Home.jsx"
import Nav from "./components/Nav.jsx"
import Shows from "./screens/Shows.jsx"
import ShowDetail from "./screens/ShowDetail.jsx"
import ShowCreate from "./screens/ShowCreate.jsx"
import ShowEdit from "./screens/ShowEdit.jsx"
import { Route, Routes } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="shows/:title" element={<ShowDetail />} />
        <Route path="/add-show" element={<ShowCreate />} />
        <Route path="/shows/:title/edit" element={<ShowEdit />} />
      </Routes>
    </div>
  );
}

export default App;
