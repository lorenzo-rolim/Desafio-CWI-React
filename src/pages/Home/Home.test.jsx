import '@testing-library/jest-dom';
import '@testing-library/react';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import Home from '.';
import { renderTheme } from '../../styles/render-theme';
import { BrowserRouter as Router } from 'react-router-dom';
import { setupServer } from 'msw/node';

import { rest } from 'msw';
import userEvent from '@testing-library/user-event';

const handlers = [
  rest.get(
    `https://gateway.marvel.com/v1/public/comics`,
    async (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          data: {
            results: [
              {
                id: 1,
                title: 'titulo teste1',
                description: 'Descrição Top1',
                thumbnail: {
                  path: 'www.testedeurl.com1',
                  extension: 'jpg1',
                },
                dates: [{ date: '2002-12-27' }],
                creators: {
                  items: [{ name: 'Lorenzo1' }, { name: 'Henrique1' }],
                },
              },
              {
                id: 2,
                title: 'titulo teste2',
                description: 'Descrição Top2',
                thumbnail: {
                  path: 'www.testedeurl.com2',
                  extension: 'jpg2',
                },
                dates: [{ date: '2002-12-27' }],
                creators: {
                  items: [{ name: 'Lorenzo2' }, { name: 'Henrique2' }],
                },
              },
            ],
          },
        }),
      );
    },
  ),
];

const server = setupServer(...handlers);

describe('<Home />', () => {
  beforeAll(() => {
    server.listen({});
  });

  afterEach(() => server.resetHandlers());

  afterAll(() => {
    server.close();
  });

  it('should search the comics', async () => {
    renderTheme(
      <Router>
        <Home />
      </Router>,
    );

    const SearchInput = screen.getByTestId('input-comics');
    const loading = screen.getByTestId('loading-icon');

    await waitForElementToBeRemoved(loading);
    userEvent.type(SearchInput, 'teste1');

    const title = screen.getByText('titulo teste1');
    expect(title).toBeInTheDocument();

    userEvent.type(SearchInput, 'qualquer coisa aleatoria');
    expect(title).not.toBeInTheDocument();

    userEvent.clear(SearchInput);
    const titles = screen.getAllByRole('heading', { name: /titulo/i });

    expect(titles[0]).toBeInTheDocument();
    expect(titles[1]).toBeInTheDocument();
  });

  it('should render loading icon at Grid', () => {
    renderTheme(
      <Router>
        <Home />
      </Router>,
    );

    const loading = screen.getByTestId('loading-icon');
    expect(loading).toBeInTheDocument();
  });

  it('should render comics after loading', async () => {
    renderTheme(
      <Router>
        <Home />
      </Router>,
    );

    const loading = screen.getByTestId('loading-icon');
    expect(loading).toBeInTheDocument();

    await waitForElementToBeRemoved(loading);

    const titles = screen.getAllByRole('heading', { name: /titulo/i });
    expect(titles[0]).toBeInTheDocument();
    expect(titles[1]).toBeInTheDocument();
  });

  it('should render modal with comic', async () => {
    renderTheme(
      <Router>
        <Home />
      </Router>,
    );

    const loading = screen.getByTestId('loading-icon');
    expect(loading).toBeInTheDocument();

    await waitForElementToBeRemoved(loading);

    const titles = screen.getAllByRole('heading', { name: /titulo/i })[0];
    const BlurDiv = screen.getAllByTestId('blur-div')[0];
    expect(titles).toBeInTheDocument();
    expect(BlurDiv).toBeInTheDocument();

    const button = screen.getAllByTestId('button-comics')[0];

    userEvent.hover(BlurDiv);
    userEvent.click(button);

    const modal = screen.getByTestId('modal');
    expect(modal).toHaveStyle(`transform: scale(1)`);

    const ModalTitle = screen.getByTestId('modal-title');
    expect(ModalTitle).toBe(titles);
  });

  it('should show error popup if email input is empty', async () => {
    renderTheme(
      <Router>
        <Home />
      </Router>,
    );

    const search = screen.getByTestId('input-email');
    expect(search).toBeInTheDocument();

    const button = screen.getByText('Enviar Quadrinhos');
    expect(button).toBeInTheDocument();

    userEvent.click(button);
    const error = screen.getByText('Ocorreu um Erro');
    expect(error).toBeInTheDocument();

    const buttonError = screen.getByTestId('button-error');

    userEvent.click(buttonError);
    expect(error).not.toBeInTheDocument();
  });
});
