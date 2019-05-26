import React from 'react';
import { render, cleanup } from 'react-testing-library';

import Calendar from './Calendar';

afterEach(cleanup)

it('renders correctly', () => {
  const { container } = render(<Calendar />);
  expect(container).toMatchSnapshot();
});