import { render, screen } from '@testing-library/react';
import App from './App';

test('NavBar component is present in the document', () => {
  render(<App />);
  const linkElement = screen.getByText(/Github Search/i);
  expect(linkElement).toBeInTheDocument();
});

test('Search component is present in the document', () => {
  render(<App />);
  const linkElement = screen.getByPlaceholderText(/Github User/i);
  expect(linkElement).toBeInTheDocument();
});
