import React,{ useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ handleInputChange, query }) => {

  const navigate = useNavigate()

  return (
    <nav className="fixed z-10 shadow-lg bg-white flex flex-row items-center justify-between h-16 w-full">
      <div>
        <input
          className="ml-4 p-2 border border-black rounded"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Search..."
        />
      </div>
      <div className='cursor-pointer' onClick={() => navigate("/")}>
        <h1 className="text-2xl">WishList <i className="bx bxs-shopping-bag-alt"></i></h1>
      </div>
      <div className="profile-container flex flex-row text-2xl gap-5 mr-5">
        <div>
          <FiHeart className="nav-icons" />
        </div>
        <div>
          <AiOutlineUserAdd className="nav-icons" />
        </div>
        <div className="cursor-pointer" onClick={() => navigate("/cart")}>
          <AiOutlineShoppingCart className="nav-icons" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
