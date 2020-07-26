import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


/*a test to make sure that description in /use aka GeneratorUse.js shows only when active aka when the mouse is on it and not when the moust is not on it...*/
