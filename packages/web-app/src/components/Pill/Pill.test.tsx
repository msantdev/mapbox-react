import { render, screen } from '@testing-library/react';
import Pill, { PillProps } from './Pill';

describe('Pill', () => {
    const renderPill = (props: PillProps) => {
        render(<Pill {...props} />);
        return screen.getByTestId('pill');
    };

    it('renders the correct text for AVAILABLE status', () => {
        const pillElement = renderPill({ status: 'AVAILABLE' });
        expect(pillElement).toHaveTextContent('Available');
    });

    it('renders the correct text for BOOKED status', () => {
        const pillElement = renderPill({ status: 'BOOKED' });
        expect(pillElement).toHaveTextContent('Booked');
    });

    it('renders the correct text for MAINTENANCE status', () => {
        const pillElement = renderPill({ status: 'MAINTENANCE' });
        expect(pillElement).toHaveTextContent('Maintenance');
    });

    it('renders the correct text for DISABLED status', () => {
        const pillElement = renderPill({ status: 'DISABLED' });
        expect(pillElement).toHaveTextContent('Disabled');
    });
});
