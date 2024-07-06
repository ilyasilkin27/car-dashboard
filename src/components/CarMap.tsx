import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Car } from '../types/Car';
import 'leaflet/dist/leaflet.css';

interface CarMapProps {
  cars: Car[];
}

const CarMap: React.FC<CarMapProps> = ({ cars }) => {
  return (
    <MapContainer center={[55.75, 37.62]} zoom={10} style={{ height: "500px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {cars.map(car => (
        <Marker key={car.id} position={[car.latitude, car.longitude]}>
          <Popup>
            {car.name} {car.model} <br /> ${car.price}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default CarMap;
