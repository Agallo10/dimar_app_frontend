
import L from 'leaflet'
import  icon  from "../assets/icon.svg";

export const IconLocation = L.icon({
    iconUrl: icon,
    iconRetinaUrl: icon,
    iconSize: [25, 41],
    className: 'leaflet-venue-icon'
})
