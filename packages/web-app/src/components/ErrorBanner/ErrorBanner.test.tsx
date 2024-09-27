import { render, screen } from '@testing-library/react';
import ErrorBanner from './ErrorBanner';

describe('ErrorBanner', () => {
    it('renders the error message correctly', () => {
        const testMessage = 'This is an error message';
        render(<ErrorBanner message={testMessage} />);

        const messageElement = screen.getByText(testMessage);
        expect(messageElement).toBeInTheDocument();
    });
});
