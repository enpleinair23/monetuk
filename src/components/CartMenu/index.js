import { useState } from "react";
import Link from "next/link";
import { IoBagHandleOutline } from "react-icons/io5";

export default function CartMenu() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Sample cart items
  const cartItems = [
    {
      id: 1,
      name: "Box Logo Hoodie",
      price: 59.99,
      quantity: 1,
      imageUrl:
        "https://files.stripe.com/links/MDB8YWNjdF8xUDQ4eGFKSUw2MUIzbzVFfGZsX3Rlc3RfZ3hGeFBMQ2dVZE1SYm42NnU4RDU3MDN200h74eEFZ2",
    },
    {
      id: 2,
      name: "Box Logo T-Shirt",
      price: 29.99,
      quantity: 2,
      imageUrl:
        "https://files.stripe.com/links/MDB8YWNjdF8xUDQ4eGFKSUw2MUIzbzVFfGZsX3Rlc3RfWEdyWkZXSk42WFloTjFqdnhKa2dTZmlU00qxLkbE54",
    },
  ];

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="relative">
      {/* Cart Icon Button */}
      <button
        className="inline-flex items-center text-2xl justify-center p-2 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 hover:bg-gray-200 transition duration-150"
        onClick={toggleCart}
      >
        <IoBagHandleOutline />
      </button>

      {/* Slide-Out Cart Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-700"
          onClick={toggleCart}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Cart Items */}
        <div className="mt-16 p-4 space-y-4">
          <h2 className="text-lg font-semibold">Shopping Cart</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-16 h-16 object-cover"
              />
              <div className="flex-1 ml-4">
                <h3 className="text-sm font-medium">{item.name}</h3>
                <p className="text-gray-500">
                  {item.quantity} x £{item.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
          <div className="mt-4 border-t pt-4">
            <h3 className="text-lg font-medium">
              Total: £{totalAmount.toFixed(2)}
            </h3>
            <Link
              href="/checkout"
              className="block w-full mt-4 bg-blue-500 text-white text-center py-2 rounded-md hover:bg-blue-600 transition duration-150"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
