import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CategoryList from './categoryList';  


test('renders categories correctly', () => {
  const categories = ['animal', 'career', 'celebrity'];
  const mockHandleClick = jest.fn();

  render(<CategoryList categories={categories} onCategoryClick={mockHandleClick} />);

  // Check if all categories are rendered
  categories.forEach((category) => {
    expect(screen.getByText(category)).toBeInTheDocument();
  });
});
