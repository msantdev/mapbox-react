import { Vehicle } from "ws-backend/types/vehicle";
import { VehicleIcon } from '../../assets/icons';
import Pill from '../Pill/Pill';

interface VehicleDetailsProps {
    vehicle: Vehicle;
}

const VehicleDetails = ({ vehicle }: VehicleDetailsProps) => {

    const renderDetail = (label: string, value: string | number) => (
        <span className="text-lg">
            <span className='text-black-primary text-base leading-6' data-testid={`detail-${label}`}>
                {label}
            </span>
            <span className="text-lg font-semibold text-black-primary leading-5 ml-1" data-testid={`detail-${value}`}>
                {value}
            </span>
        </span>
    );

    return (
        <div className="absolute z-10 flex flex-col items-start p-3 h-42 bg-grey-default shadow-lg rounded-xl w-full bottom-0 left-0 md:w-[350px] md:top-28 md:left-6 md:bottom-auto md:right-auto">
            <div className="flex flex-col w-full h-20 bg-white border border-grey-light rounded-t-xl">
                <div className="flex items-center space-x-4 p-3">
                    <VehicleIcon />
                    <div className="flex flex-col space-y-2">
                        <span className="text-black-primary text-lg font-semibold leading-5">
                            {vehicle.name}
                        </span>
                        <div className="inline-flex">
                            <Pill status={vehicle.status} value={vehicle.status} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-start w-full h-19 bg-white p-3 gap-3 border border-grey-light border-t-0 rounded-b-xl">
                <div className="flex space-x-4 md:flex-col md:space-x-0">
                    {renderDetail('Plate:', vehicle.plate_number.toUpperCase())}
                    {renderDetail('Battery:', `${Math.round(vehicle.battery)}%`)}
                </div>
            </div>
        </div>
    );
};

export default VehicleDetails;
