import { useState } from "react";
import { useCart } from "../context/CartContext";
import Header from "../components/HeaderComps";
import Footer from "../components/FooterComps";
import { useRouter } from "next/router";

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      // Replace with your actual submission logic
      console.log("Submitting", form);
      // Clear the cart on successful submission
      clearCart();
      router.push("/thank-you");
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const totalAmount = cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* Header */}
      <Header />

      {/* Page Container */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>
        <div className="flex flex-col lg:flex-row">
          {/* Cart Details */}
          <div className="lg:w-1/2 lg:pr-4">
            <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
            <ul>
              {cart.items.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                cart.items.map((item) => (
                  <li key={item.id} className="flex justify-between mb-2">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-600">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                  </li>
                ))
              )}
            </ul>
            <div className="mt-4 border-t pt-4">
              <h3 className="text-lg font-medium">
                Total: ${totalAmount.toFixed(2)}
              </h3>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="lg:w-1/2 lg:pl-4 mt-8 lg:mt-0">
            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="address"
                >
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-150"
              >
                {isSubmitting ? "Processing..." : "Place Order"}
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default CheckoutPage;
