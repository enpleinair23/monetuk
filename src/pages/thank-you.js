import Header from "../components/HeaderComps";
import Footer from "../components/FooterComps";

const ThankYouPage = () => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Page Container */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Thank You!</h1>
        <p className="text-lg mb-4">Your order has been placed successfully.</p>
        <p className="text-gray-600">
          You will receive an email confirmation shortly.
        </p>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default ThankYouPage;
