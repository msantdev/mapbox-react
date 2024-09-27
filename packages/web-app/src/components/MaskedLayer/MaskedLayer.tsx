import React from "react";
import { Layer, Source } from "react-map-gl";
import { Feature, Polygon, GeoJsonProperties } from "geojson";

interface MaskedLayerProps {
    data: Feature<Polygon, GeoJsonProperties> | null;
}

const MaskedLayer: React.FC<MaskedLayerProps> = ({ data }: MaskedLayerProps) => {
    if (!data) {
        return null;
    }

    return (
        <Source id="polygons-source" type="geojson" data={data}>
            <Layer
                id="polygons"
                type="fill"
                source="polygons-source"
                paint={{ 'fill-color': 'gray', 'fill-opacity': 0.5 }}
            />
        </Source>
    );
};

export default MaskedLayer;
