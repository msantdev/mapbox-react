import { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { ClientToServerEvents, ServerToClientEvents } from 'ws-backend/types/socket';
import { Vehicle } from 'ws-backend/types/vehicle';

const useVehiclesWebSocket = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [error, setError] = useState<string | null>(null);
  const socketRef = useRef<Socket<ServerToClientEvents, ClientToServerEvents>>();

  useEffect(() => {
    const socketURL = import.meta.env.VITE_WEBSOCKET_URL;
    socketRef.current = io(socketURL, { autoConnect: false });

    const socket = socketRef.current;

    socket.on('connect_error', (err) => {
      console.error('Connection Error:', err);
      setError('Connection failed. Please try again later.');
    });

    socket.on('vehicle', (vehicle) => {
      setVehicles((prevVehicles) => {
        const vehicleIndex = prevVehicles.findIndex((v) => v.id === vehicle.id);
        if (vehicleIndex !== -1) {
          return [
            ...prevVehicles.slice(0, vehicleIndex),
            vehicle,
            ...prevVehicles.slice(vehicleIndex + 1),
          ];
        }
        return [...prevVehicles, vehicle];
      });
    });

    socket.on('vehicles', (vehicles) => {
      setVehicles(vehicles);
    });

    socket.connect();

    return () => {
      socket.off('vehicle');
      socket.disconnect();
    };
  }, []);

  return { vehicles, error };
};

export default useVehiclesWebSocket;
