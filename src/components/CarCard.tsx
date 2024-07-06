import React from 'react';
import { Car } from '../types/Car';
import { Card, Button } from 'react-bootstrap';

interface CarCardProps {
  car: Car;
  onEdit: (car: Car) => void;
  onDelete: (id: number) => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, onEdit, onDelete }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{car.name} {car.model}</Card.Title>
        <Card.Text>
          Year: {car.year} <br />
          Price: ${car.price}
        </Card.Text>
        <Button variant="primary" onClick={() => onEdit(car)}>Edit</Button>
        <Button className='mx-1' variant="danger" onClick={() => onDelete(car.id)}>Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default CarCard;
