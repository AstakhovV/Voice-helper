import React from 'react';
import { render, screen } from '@testing-library/react';
import ListCommands from './ListCommands';
import { Command } from '../../../types/common';

const commands: Command[] = [
  {
    id: '12312',
    command: 'Render',
    description: 'Render something',
    callback: () => console.log('render'),
  },
];

describe('Render Navbar', () => {
  beforeAll(() => {
    render(<ListCommands commands={commands} />);
  });

  test('Navbar renders correctly', () => {
    const list = screen.getByRole('list');
    expect(list).toMatchSnapshot();
  });

  test('Command renders correctly', () => {
    const listItems = screen.getAllByRole('listitem');
    for (const element of listItems) {
      expect(element).toBeInTheDocument();
    }
    expect(listItems[0]).toHaveTextContent('Render - Render something');
  });
});
