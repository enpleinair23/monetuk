import React from "react";
import { useCart } from "../../context/CartContext";
import Link from 'next/link';

const CartMenu = ({ isOpen, onClose }) => {
  const { cart, removeFromCart } = useCart();

  const totalAmount = cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`fixed right-0 top-0 h-full w-80 bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl text-black font-bold">Shopping Cart</h2>
        <button
          onClick={onClose}
          className="text-gray-700 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 hover:bg-gray-200 transition duration-150"
        >
          <svg
            className={`w-6 h-6 transition-transform transform ${
              isOpen ? "rotate-90" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
      <div className="p-4">
        {cart.items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.items.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between mb-4"
              >
                <div className="flex items-center">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-16 h-16 object-cover mr-4"
                  />
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item)}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="mt-auto border-t pt-4">
        <h3 className="text-lg font-medium">
          Total: 
        </h3>
        <Link
          href="/checkout"
          className="block w-full mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition duration-300"
          onClick={onClose} // Close the cart when going to checkout
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartMenu;
