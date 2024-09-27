import { useMemo } from "react";
import { featureCollection, mask, polygon, union } from '@turf/turf';
import { worldMask } from "../utils/mapConfig";
import { FeatureCollection, Polygon } from "geojson";

const usePolygonMasking = (zones: FeatureCollection<Polygon>) => {
  const maskedPolygons = useMemo(() => {
    const polyArray = zones.features.map((feature) =>
      polygon(feature.geometry.coordinates)
    );

    const combinedPolygons = union(featureCollection(polyArray));

    return combinedPolygons ? mask(combinedPolygons, worldMask) : null;
  }, [zones]);

  return maskedPolygons;
};

export default usePolygonMasking;
