import { Marker } from 'react-map-gl';
import { AvailableVehicleIcon, BookedVehicleIcon, MaintenanceVehicleIcon } from '../../assets/icons';
import { Vehicle } from 'ws-backend/types/vehicle';
import { point, booleanPointInPolygon, polygon } from '@turf/turf';
import { getMarkerColor } from './VehicleMarker.utils';

interface VehicleMarkerProps {
    vehicle: Vehicle;
    cityPolygons: GeoJSON.Position[][][];
    selectedVehicleId: number | null;
    onSelect: (vehicle: Vehicle | null) => void;
}

const VehicleMarker = ({ vehicle, cityPolygons, selectedVehicleId, onSelect }: VehicleMarkerProps) => {
    const vehiclePoint = point([vehicle.lng, vehicle.lat]);
    const isInZone = cityPolygons.some(coordinates => {
        const poly = polygon(coordinates);
        return booleanPointInPolygon(vehiclePoint, poly);
    });

    if (!isInZone || vehicle.status === "DISABLED") return null;

    const handleClick = () => {
        onSelect(selectedVehicleId === vehicle.id ? null : vehicle);
    };

    const getVehicleIcon = () => {
        if (selectedVehicleId === vehicle.id) {
            switch (vehicle.status) {
                case "AVAILABLE":
                    return <AvailableVehicleIcon />;
                case "BOOKED":
                    return <BookedVehicleIcon />;
                case "MAINTENANCE":
                    return <MaintenanceVehicleIcon />;
                default:
                    return (
                        <div className={`w-5 h-5 rounded-full ${getMarkerColor(vehicle.status)} cursor-pointer`} />);
            }
        }
        return (
            <div className={`w-5 h-5 rounded-full ${getMarkerColor(vehicle.status)} cursor-pointer`} />
        );
    };

    return (
        <Marker
            key={vehicle.id}
            longitude={vehicle.lng}
            latitude={vehicle.lat}
            anchor="bottom"
            onClick={handleClick}
        >
            {getVehicleIcon()}
            <div className="absolute inset-0 w-1 h-1 bg-white rounded-full mx-auto my-auto" />
        </Marker>
    );
};

export default VehicleMarker;
