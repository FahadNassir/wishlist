import Navbar from './sections/Navbar';
import data from './database/data';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import { useEffect, useState } from 'react';

function App() {
  const [listItems, setListItems] = useState([]);

  // Function to add items to the list
  const addToList = ({ id, img, title, star, reviews, prevPrice, newPrice }) => {
    let product = { id, img, title, star, reviews, prevPrice, newPrice };
    setListItems([...listItems, product]);
  };

  useEffect(() => {
    localStorage.setItem('listItems', JSON.stringify(listItems));
  }, [listItems]);

  useEffect(() => {
    const storedListItems = JSON.parse(localStorage.getItem('listItems')) || [];
    setListItems(storedListItems);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home listItems={listItems} addToList={addToList} />} />
        <Route path='/cart' element={<Cart listItems={listItems} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
