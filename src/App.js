import React from 'react';
import ToolBar from "@mui/material/Toolbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ShopContextProvider } from './context/shop-context';
import Nav from './components/nav';
import Card from './components/card';
import Shop from './components/shop';


function App() {
  return (
    <ShopContextProvider>
      <Router>
        <div>
          <Nav />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/card" element={<Card />} />
          </Routes>
        </div>
      </Router>
    </ShopContextProvider>
  );
}

export default App;
