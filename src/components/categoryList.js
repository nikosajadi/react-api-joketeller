import React from 'react';

const CategoryList = ({ categories, onCategoryClick }) => {
  return (
    <div className="category-list mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Categories:</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
        {categories.length === 0 ? (
          <p>No categories available</p>
        ) : (
          categories.map((category, index) => (
            <li key={index}>
              <button
                className="bg-blue-200 text-gray-500 font-bold w-full px-4 py-6 rounded-lg shadow-lg hover:bg-blue-400 transition-all duration-300 ease-in-out text-center"
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
