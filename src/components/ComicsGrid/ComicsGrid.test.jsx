import '@testing-library/jest-dom';
import '@testing-library/react';

import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import ComicsGrid from '.';
import { renderTheme } from '../../styles/render-theme';
import { server } from '../../services/MockService/MockServer';

describe('<ComicsGrid />', () => {
  beforeAll(() => {
    server.listen({});
  });

  afterEach(() => server.resetHandlers());

  afterAll(() => {
    server.close();
  });

  it('should render loading', async () => {
    renderTheme(<ComicsGrid />);

    const loading = screen.getByTestId('loading-icon');
    expect(loading).toBeInTheDocument();
  });

  it('should render comics after loading', async () => {
    renderTheme(<ComicsGrid />);

    const loading = screen.getByTestId('loading-icon');

    await waitForElementToBeRemoved(loading, { timeout: 30000 });
    const title1 = screen.getByRole('heading', { name: 'titulo teste1' });
    const title2 = screen.getByRole('heading', { name: 'titulo teste2' });

    expect(title1).toBeInTheDocument();
    expect(title2).toBeInTheDocument();
  });

  it('should render comics after loading and dont show the button', async () => {
    renderTheme(<ComicsGrid />);

    const loading = screen.getByTestId('loading-icon');

    await waitForElementToBeRemoved(loading, { timeout: 30000 });
    const title1 = screen.getByRole('heading', { name: 'titulo teste1' });
    const title2 = screen.getByRole('heading', { name: 'titulo teste2' });

    expect(title1).toBeInTheDocument();
    expect(title2).toBeInTheDocument();

    const Button = screen.getAllByRole('button', { name: /detalhes/i });
    expect(Button[0]).not.toBeVisible();
  });
});
