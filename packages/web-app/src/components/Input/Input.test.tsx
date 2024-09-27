
import { fireEvent, render, screen } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
    const mockOnChange = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders correctly with the initial value', () => {
        const testValue = 'Initial Value';
        render(<Input value={testValue} onChange={mockOnChange} placeholder="Type here..." />);

        const inputElement = screen.getByTestId('input-field');
        expect(inputElement).toBeInTheDocument();

        expect(inputElement).toHaveValue(testValue);
    });

    it('calls onChange with the correct value when typing', () => {
        render(<Input value="" onChange={mockOnChange} placeholder="Type here..." />);
        const inputElement = screen.getByTestId('input-field');
        fireEvent.change(inputElement, { target: { value: 'New Value' } });

        expect(mockOnChange).toHaveBeenCalledTimes(1);
    });
});
