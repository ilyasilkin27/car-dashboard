import React from 'react';
import { Car } from '../types/Car';

interface CarCardProps {
  car: Car;
  onEdit: (car: Car) => void;
  onDelete: (id: number) => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, onEdit, onDelete }) => {
  return (
    <div className="car-card">
      <h2>{car.name} {car.model}</h2>
      <p>Year: {car.year}</p>
      <p>Price: ${car.price}</p>
      <button onClick={() => onEdit(car)}>Edit</button>
      <button onClick={() => onDelete(car.id)}>Delete</button>
    </div>
  );
};

export default CarCard;
