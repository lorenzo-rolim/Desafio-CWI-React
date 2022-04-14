import '@testing-library/jest-dom';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import FullDetails from '.';
import { renderTheme } from '../../styles/render-theme';
import { BrowserRouter as Router } from 'react-router-dom';
import { server } from '../../services/MockService/MockServer';

describe('<FullDetails />', () => {
  beforeAll(() => {
    server.listen({});
  });

  afterEach(() => server.resetHandlers());

  afterAll(() => {
    server.close();
  });

  it('should render loading icon', () => {
    renderTheme(
      <Router>
        <FullDetails />
      </Router>,
    );

    const loading = screen.getByTestId('loading-icon');
    expect(loading).toBeInTheDocument();
  });

  it('should render header with marvel details', () => {
    renderTheme(
      <Router>
        <FullDetails />
      </Router>,
    );

    const HeaderTitle = screen.getByText('Marvel Details');
    expect(HeaderTitle).toBeInTheDocument();
  });

  it('should render the comic after loading', async () => {
    renderTheme(
      <Router>
        <FullDetails />
      </Router>,
    );

    const loading = screen.getByTestId('loading-icon');

    await waitForElementToBeRemoved(loading, { timeout: 30000 });

    const ComicTitle = screen.getByText('titulo teste1');
    expect(ComicTitle).toBeInTheDocument();
  });
});
