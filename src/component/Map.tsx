import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
// import { showDataOnMap } from "../utils";
type centerType = {
  lat: number;
  lng: number;
};
type MapProps = {
  countries: any;
  casesType: string;
  center: centerType;
  zoom: number;
};

const Map: React.FC<MapProps> = ({ countries, casesType, center, zoom }) => {

  return (
    <div className="w-full">
      {/* <MapContainer  zoom={zoom}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {showDataOnMap(countries, casesType)}
      </MapContainer> */}
    </div>
  );
};

export default Map;
