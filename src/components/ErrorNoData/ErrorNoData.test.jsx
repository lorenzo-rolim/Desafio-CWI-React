import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import ErrorNoData from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<ErrorNoData />', () => {
  it('should render no data menssage', () => {
    renderTheme(<ErrorNoData></ErrorNoData>);

    const menssage = screen.getByText(
      'Desculpe mas não existem quadrinhos no momento',
    );

    expect(menssage).toBeInTheDocument();
  });
});
