import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderTheme } from '../../styles/render-theme';
import { Mock } from './MockComponents/Mock';

describe('<ComicsInput />', () => {
  it('should write and clear input', async () => {
    renderTheme(<Mock />);

    const input = screen.getByTestId('input-comics');
    expect(input).toBeInTheDocument();

    userEvent.type(input, 'seila meu');
    expect(input).toHaveValue('seila meu');

    userEvent.clear(input);
    expect(input).toHaveValue('');
  });
});
