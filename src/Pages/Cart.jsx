import React from 'react';
import CartCard from '../components/CartCard'; 
import Navbar from '../sections/Navbar';

const Cart = ({ listItems }) => {
  return (
    <div>
      <Navbar />
      <div className='top-20'>
        <h1>Your Gift List</h1>
        <div className='flex flex-col gap-6'>
          {listItems.map((item, index) => (
            <CartCard
              key={index} 
              img={item.img}
              title={item.title}
              star={item.star}
              reviews={item.reviews}
              prevPrice={item.prevPrice}
              newPrice={item.newPrice}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
