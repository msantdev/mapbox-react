import { render, screen } from '@testing-library/react';
import VehicleDetails from './VehicleDetails';
import { Vehicle } from 'ws-backend/types/vehicle';
import '@testing-library/jest-dom';
import { statusDisplayValues } from '../../utils/status';

jest.mock('../../assets/icons', () => ({
    VehicleIcon: () => <svg data-testid="vehicle-icon" />,
}));

const mockVehicle: Vehicle = {
    id: 1,
    name: 'Scooter X',
    status: 'AVAILABLE',
    plate_number: 'ABCD1234',
    battery: 75,
    lat: 150,
    lng: 200
};

describe('VehicleDetails', () => {
    it('renders the vehicle details based on the vehicle object', () => {
        render(<VehicleDetails vehicle={mockVehicle} />);

        expect(screen.getByText(mockVehicle.name)).toBeInTheDocument();

        expect(screen.getByText(mockVehicle.plate_number.toUpperCase())).toBeInTheDocument();

        expect(screen.getByText(`${Math.round(mockVehicle.battery)}%`)).toBeInTheDocument();

        expect(screen.getByText(statusDisplayValues[mockVehicle.status])).toBeInTheDocument();
    });

    it('renders the VehicleIcon', () => {
        render(<VehicleDetails vehicle={mockVehicle} />);

        const vehicleIcon = screen.getByTestId('vehicle-icon');
        expect(vehicleIcon).toBeInTheDocument();
    });
});
