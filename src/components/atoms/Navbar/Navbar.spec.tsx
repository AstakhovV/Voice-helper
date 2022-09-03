import Navbar from './Navbar';
import React from 'react';
import { render, screen } from '@testing-library/react';

describe('Render Navbar', () => {
  test('Navbar renders correctly', () => {
    render(<Navbar />);
    const navbar = screen.getByRole('heading');
    expect(navbar).toMatchSnapshot();
  });
});
