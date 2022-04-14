import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import PopUp from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<PopUp />', () => {
  it('should render error PopUp', () => {
    renderTheme(
      <PopUp
        error={true}
        title="Ocorreu um Erro"
        description="Tente Novamente mais Tarde!"
      />,
    );

    const ErrorTitle = screen.getByText('Ocorreu um Erro');
    expect(ErrorTitle).toBeInTheDocument();
    expect(ErrorTitle).toHaveStyle(`background: ${theme.colors.gradient}`);
  });

  it('should render success PopUp', () => {
    renderTheme(
      <PopUp
        error={false}
        title="Sucesso!"
        description="Seu E-Mail foi enviado."
      />,
    );

    const SuccessTitle = screen.getByText('Sucesso!');
    const container = screen.getByTestId('popup-container');
    expect(SuccessTitle).toBeInTheDocument();
    expect(container).toBeInTheDocument();

    expect(container).toHaveStyle(`background: #92d18b`);
  });
});
