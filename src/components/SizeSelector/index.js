import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SizeSelector({ sizes }) {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="mb-4">
      <h3 className="text-lg text-black font-semibold mb-2">Size:</h3>
      <div className="flex flex-wrap gap-4">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => handleSizeClick(size)}
            className={`px-4 py-2 border border-gray-300 rounded-md transition duration-300 ${
              selectedSize === size
                ? 'bg-black text-white border-black'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            aria-pressed={selectedSize === size}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}

SizeSelector.propTypes = {
  sizes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SizeSelector;
