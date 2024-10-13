// components/CategoryList.js
import React from 'react';

const CategoryList = ({ categories, onCategoryClick }) => {
  return (
    <div className="category-list mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Categories:</h2>
      <ul className="flex flex-wrap justify-center space-x-4">
        {categories.length === 0 ? (
          <p>No categories available</p>
        ) : (
          categories.map((category, index) => (
            <li key={index}>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                onClick={() => onCategoryClick(category)}
              >
                {category}
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default CategoryList;
