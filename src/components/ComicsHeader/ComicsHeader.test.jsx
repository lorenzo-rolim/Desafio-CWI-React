import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import ComicsHeader from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<ComicsHeader />', () => {
  it('should render title', () => {
    renderTheme(<ComicsHeader title="Marvel Comics" />);

    const title = screen.getByText('Marvel Comics');
    expect(title).toBeInTheDocument();
  });
});
