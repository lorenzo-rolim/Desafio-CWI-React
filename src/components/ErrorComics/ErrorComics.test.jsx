import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import ErrorComcis from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<ErrorComcis />', () => {
  it('should render error menssage', () => {
    renderTheme(<ErrorComcis></ErrorComcis>);

    const ErroTitle = screen.getByText('Ocorreu um erro!');
    expect(ErroTitle).toBeInTheDocument();
  });
});
