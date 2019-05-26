import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, cleanup } from 'react-testing-library';

import Calendar from './Calendar';

afterEach(cleanup)

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calendar />, div);
});

it('renders correctly', () => {
  const { container } = render(<Calendar />);
  expect(container).toMatchSnapshot();
});

it('renders Janeiro name', () => {
  const { getByText } = render(<Calendar />);
  expect(getByText('Janeiro')).toBeInTheDocument();
});

it('renders Fevereiro after clicking for next month', () => {
  const { container } = render(<Calendar />);
  fireEvent.click(queryAllBy('.icon.arrow-right'));
});