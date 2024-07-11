import React, { useState } from 'react';
import data from '../database/data';
import Navbar from '../sections/Navbar';
import Recommended from '../sections/Recommended';
import Products from '../sections/Products';
import Card from '../components/Card';

const Home = ({ listItems, addToList }) => {
  const [query, setQuery] = useState('');

  // Function to handle input change in the search bar
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // Function to filter data based on title
  const filterData = (data, query) => {
    let filteredProducts = data;

    if (query) {
      filteredProducts = data.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    return filteredProducts.map(({ id, img, title, star, reviews, prevPrice, newPrice }) => (
      <Card
        key={id}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
        addToList={() => addToList({ id, img, title, star, reviews, prevPrice, newPrice })}
      />
    ));
  };

  // Filtered products based on current query
  const showing = filterData(data, query);

  return (
    <div className='flex flex-col'>
      {/* Navbar component for search and navigation */}
      <Navbar handleInputChange={handleInputChange} query={query} listItems={listItems} />
      
      {/* Recommended component */}
      <Recommended />
      
      {/* Products component to display filtered products */}
      <Products result={showing} />
    </div>
  );
};

export default Home;
