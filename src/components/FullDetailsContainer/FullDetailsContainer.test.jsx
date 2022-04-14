import '@testing-library/jest-dom';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import FullDetailsContainer from '.';
import { renderTheme } from '../../styles/render-theme';
import { server } from '../../services/MockService/MockServer';

describe('<FullDetailsContainer />', () => {
  beforeAll(() => {
    server.listen({});
  });

  afterEach(() => server.resetHandlers());

  afterAll(() => {
    server.close();
  });

  it('should render loading before comics', () => {
    renderTheme(<FullDetailsContainer></FullDetailsContainer>);

    const loading = screen.getByTestId('loading-icon');
    expect(loading).toBeInTheDocument();
  });

  it('should render comics after loading', async () => {
    renderTheme(<FullDetailsContainer></FullDetailsContainer>);

    const loading = screen.getByTestId('loading-icon');

    await waitForElementToBeRemoved(loading, { timeout: 5000 });
    const FullDetailsTitle = screen.getByText('titulo teste1');
    expect(FullDetailsTitle).toBeInTheDocument();
  });
});
