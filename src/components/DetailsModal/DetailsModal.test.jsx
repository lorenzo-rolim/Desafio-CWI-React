import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import DetailsModal from '.';
import { renderTheme } from '../../styles/render-theme';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<DetailsModal />', () => {
  it('should render exit button', () => {
    renderTheme(
      <Router>
        <DetailsModal></DetailsModal>
      </Router>,
    );

    const ExitButton = screen.getByText('X');
    expect(ExitButton).toBeInTheDocument();
  });

  it('should render Modal Button', () => {
    renderTheme(
      <Router>
        <DetailsModal></DetailsModal>
      </Router>,
    );

    const ModalButton = screen.getByText('ver Completo');
    expect(ModalButton).toBeInTheDocument();
  });
});
