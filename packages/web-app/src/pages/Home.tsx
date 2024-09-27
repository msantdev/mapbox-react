import "mapbox-gl/dist/mapbox-gl.css";
import { useState, useMemo } from "react";
import { Vehicle } from "ws-backend/types/vehicle";
import Map from "react-map-gl";
import barcelonaZone from '../assets/zones/barcelona.json';
import useVehiclesWebSocket from "../hooks/useVehiclesWebSocket";
import VehicleDetails from "../components/VehicleDetails/VehicleDetails";
import usePolygonMasking from "../hooks/usePolygonMasking";
import { barcelonaMapConfig, mapConfigStyles } from "../utils/mapConfig";
import ErrorBanner from "../components/ErrorBanner/ErrorBanner";
import VehicleMarker from "../components/VehicleMarker/VehicleMarker";
import Header from "../components/Header/Header";
import MaskedLayer from "../components/MaskedLayer/MaskedLayer";
import { Polygon, FeatureCollection } from "geojson";

const MAPBOX_ACCESS_TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

const Home = () => {
  const { vehicles, error } = useVehiclesWebSocket();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  const maskedPolygons = usePolygonMasking(barcelonaZone as FeatureCollection<Polygon>);

  const filteredVehicles = useMemo(() =>
    vehicles.filter(vehicle =>
      vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.plate_number.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    [vehicles, searchQuery]
  );

  return (
    <div className="relative h-screen w-full">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Map
        mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
        initialViewState={barcelonaMapConfig}
        mapStyle={mapConfigStyles.default}
      >
        {error && <ErrorBanner message={error} />}
        {filteredVehicles.map((vehicle) => (
          <VehicleMarker
            key={vehicle.id}
            vehicle={vehicle}
            cityPolygons={barcelonaZone.features.map(feature => feature.geometry.coordinates)}
            selectedVehicleId={selectedVehicle?.id || null}
            onSelect={setSelectedVehicle}
          />
        ))}
        <MaskedLayer data={maskedPolygons} />
      </Map>
      {selectedVehicle && <VehicleDetails vehicle={selectedVehicle} />}
    </div>
  );
}

export default Home;
