import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Markers } from "../components/Markers";
import { useLocation } from "react-router-dom";


export const DimarPage = () => {

    const { state } = useLocation();
    const { listFeatures } = state;

  return (
    <MapContainer center={[-0.4595787385014721, -72.49249688877029]} zoom={6}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    <Markers listFeatures={listFeatures}/>
    
    </MapContainer>
  );
};
