import React from "react";
import { IconLocation } from "./IconLocation";
import icon from "../assets/icon.svg";
import { Marker, Popup } from "react-leaflet";

export const Markers = (props) => {
  //geometry, coordinates

  const { listFeatures } = props;
  //const { geometry } = listFeatures;
  //const { coordinates } = geometry;

  console.log(listFeatures);

  const markers = listFeatures.map((list, i) => (
    <Marker key={i} position={list.geometry.coordinates}>
      <Popup>
        Magnitud: <br />{list.properties.mag}
      </Popup>
    </Marker>
  ));

  return markers;
};
