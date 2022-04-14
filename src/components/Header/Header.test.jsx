import { screen } from '@testing-library/react';
import Header from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Header />', () => {
  it('should render header using Marvel Comics on Logo', () => {
    renderTheme(<Header title="Marvel Comics"></Header>);

    const Logo = screen.getByText('Marvel Comics');
  });
});
