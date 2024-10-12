import React from 'react';

const CategoryList = ({ categories, onCategoryClick }) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {categories.map((category, index) => (
        <li
          key={index}
          onClick={() => onCategoryClick(category)}
          className="cursor-pointer bg-white shadow-md rounded-lg p-4 text-center hover:bg-blue-100"
        >
          {category}
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
