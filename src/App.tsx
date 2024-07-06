import React, { useEffect, useState } from 'react';
import CarList from './components/CarList';
import CarMap from './components/CarMap';
import { fetchCars } from './services/api';
import { Car } from './types/Car';
import { Container } from 'react-bootstrap';

const App: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const getCars = async () => {
      const cars = await fetchCars();
      setCars(cars);
    };
    getCars();
  }, []);

  return (
    <Container>
      <h1 className="my-4">Car Dashboard</h1>
      <CarList />
      <CarMap cars={cars} />
    </Container>
  );
};

export default App;
