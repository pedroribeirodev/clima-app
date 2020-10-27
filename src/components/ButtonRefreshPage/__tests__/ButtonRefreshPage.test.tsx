import React from 'react';
import { render } from '@testing-library/react';
import ButtonRefreshPage from '../index';

const mockHistoryGo = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    go: mockHistoryGo,
  }),
}));

describe('Home container unit tests', () => {
  it('Render home without crashing', () => {
    const { container } = render(<ButtonRefreshPage>Teste unitários</ButtonRefreshPage>);

    expect(container).toBeTruthy();
  });

  it('Render children props', () => {
    const { container } = render(<ButtonRefreshPage>Teste unitários</ButtonRefreshPage>);

    expect(container).toBeTruthy();
    expect(container).toHaveTextContent('Teste unitários');
  });
});
