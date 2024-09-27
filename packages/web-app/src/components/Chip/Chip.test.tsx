import { render, screen, fireEvent } from '@testing-library/react';
import Chip from './Chip';

describe('Chip Component', () => {
    const label = 'Test Chip';

    it('renders with the correct label', () => {
        render(<Chip label={label} />);
        expect(screen.getByText(label)).toBeInTheDocument();
    });

    it('renders with default secondary variant', () => {
        render(<Chip label={label} />);
        const chipElement = screen.getByText(label).parentElement;
        expect(chipElement).toHaveClass('bg-grey-default text-black-primary');
    });

    it('renders with primary variant', () => {
        render(<Chip label={label} variant="primary" />);
        const chipElement = screen.getByText(label).parentElement;
        expect(chipElement).toHaveClass('bg-green-brand text-white');
    });

    it('calls onClick function when clicked', () => {
        const handleClick = jest.fn();
        render(<Chip label={label} onClick={handleClick} />);

        const chipElement = screen.getByText(label);
        fireEvent.click(chipElement);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
