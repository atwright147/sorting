import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('should render the App component', () => {
    const { container } = render(<App />);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const element = container.querySelector('.App');
    expect(element).toBeInTheDocument();
  });

  it('should render the correct heading', () => {
    render(<App />);
    const element = screen.getByText(/Order Summary/i);
    expect(element).toBeInTheDocument();
  });

  it('should render a table', () => {
    render(<App />);
    const element = screen.getByRole('table');
    expect(element).toBeInTheDocument();
  });
});
