import { render, screen } from '@testing-library/react';

import { SortingIcon } from './SortingIcon';

describe('SortingIcon component', () => {
  describe('given column is not the sort column', () => {
    it('should render a double arrow', () => {
      render(<SortingIcon column="column1" sortColumn="column2" direction="desc" />);
      const element = screen.getByText(/↕/i);
      expect(element).toBeInTheDocument();
    });
  });

  describe('given column is the sort column', () => {
    describe('given direction is desc', () => {
      it('should render a down arrow', () => {
        render(<SortingIcon column="column1" sortColumn="column1" direction="desc" />);
        const element = screen.getByText(/↓/i);
        expect(element).toBeInTheDocument();
      });
    });

    describe('given direction is asc', () => {
      it('should render a up arrow', () => {
        render(<SortingIcon column="column1" sortColumn="column1" direction="asc" />);
        const element = screen.getByText(/↑/i);
        expect(element).toBeInTheDocument();
      });
    });
  });
});
