import React, { useState, useEffect } from 'react';
import { fetchCars } from '../services/api';
import { Car } from '../types/Car';
import CarCard from './CarCard';
import EditCarModal from './EditCarModal';
import { Button, Container, Row, Col } from 'react-bootstrap';

const CarList: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [editCar, setEditCar] = useState<Car | null>(null);

  useEffect(() => {
    const getCars = async () => {
      const cars = await fetchCars();
      setCars(cars);
    };
    getCars();
  }, []);

  const handleSort = (key: 'year' | 'price') => {
    const sortedCars = [...cars].sort((a, b) => (a[key] > b[key] ? 1 : -1));
    setCars(sortedCars);
  };

  const handleEdit = (car: Car) => {
    setEditCar(car);
  };

  const handleDelete = (id: number) => {
    setCars(cars.filter(car => car.id !== id));
  };

  const handleSave = (updatedCar: Car) => {
    setCars(cars.map(car => car.id === updatedCar.id ? updatedCar : car));
    setEditCar(null);
  };

  return (
    <Container>
      <Row className="mb-3">
        <Col>
          <Button variant="secondary" onClick={() => handleSort('year')}>Sort by Year</Button>
          <Button className='mx-2' variant="secondary" onClick={() => handleSort('price')}>Sort by Price</Button>
        </Col>
      </Row>
      <Row>
        {cars.map(car => (
          <Col key={car.id} md={4}>
            <CarCard car={car} onEdit={handleEdit} onDelete={handleDelete} />
          </Col>
        ))}
      </Row>
      {editCar && <EditCarModal car={editCar} onSave={handleSave} onCancel={() => setEditCar(null)} />}
    </Container>
  );
};

export default CarList;
