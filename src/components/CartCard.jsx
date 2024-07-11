import React from 'react';

const CartCard = ({ img, title, prevPrice, newPrice }) => {
  return (
    <div className='flex flex-col gap-6'>
      <section className="p-4 shadow-lg w-full m-5 flex flex-row items-center justify-between">
        <div className='w-64 p-4'>
          <img src={img} alt={title} className="card-img mb-4" />
          <h3 className="card-title">{title}</h3>
        </div>

        <div className="relative card-details right-8">
          <section className="card-price flex flex-col gap-2">
            <div className="price">
               <del>{prevPrice}</del> {newPrice}
            </div>
            <button className='border border-black rounded px-3 py-2 hover:bg-black hover:text-white'>Buy</button>
            <button className='bg-red-200 text-white rounded px-3 py-2 hover:bg-red-400'>Remove</button>
          </section>
        </div>
      </section>
    </div>
  );
};

export default CartCard;
