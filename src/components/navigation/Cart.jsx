import React from 'react';
import { CiShoppingCart } from "react-icons/ci";

function Cart({ itemCount }) {
  return (
    <div className="relative flex items-center mr-2 cursor-pointer">
      {/* Cart icon */}
      <CiShoppingCart size={30} className="text-black" />

      {itemCount > 0 && (
        <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full lg:w-5 lg:h-5 w-4 h-4 flex items-center justify-center text-sm">
          {itemCount}
        </span>
      )}
    </div>
  );
}

export default Cart;
