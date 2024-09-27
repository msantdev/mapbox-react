import { polygon } from "@turf/turf";

export const barcelonaMapConfig = {
    longitude: 2.154007,
    latitude: 41.390205,
    zoom: 13,
  };  

export const mapConfigStyles = {
  default: "mapbox://styles/mapbox/streets-v9",
  satellite: "mapbox://styles/mapbox/satellite-v9",
  outdoors: "mapbox://styles/mapbox/outdoors-v9",
  light: "mapbox://styles/mapbox/light-v10",
  dark: "mapbox://styles/mapbox/dark-v10",
};

export const worldMask = polygon([
  [
    [-180, -90],
    [180, -90],
    [180, 90],
    [-180, 90],
    [-180, -90],
  ],
]);