import React from 'react';
import { render } from '@testing-library/react';
import Home from '../index';

const mockGeolocation = {
  getCurrentPosition: jest.fn()
    .mockImplementationOnce((success) => Promise.resolve(success({
      coords: {
        latitude: 51.1,
        longitude: 45.3,
      },
    }))),
};

global.navigator.geolocation = mockGeolocation;
describe('Home container unit tests', () => {
  it('Render home without crashing', () => {
    const { container } = render(<Home />);

    expect(container).toBeTruthy();
  });
});
