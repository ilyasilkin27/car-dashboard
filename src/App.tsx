import React, { useEffect, useState } from 'react';
import CarList from './components/CarList';
import CarMap from './components/CarMap';
import { fetchCars } from './services/api';
import { Car } from './types/Car';

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
    <div className="App">
      <h1>Car Dashboard</h1>
      <CarList />
      <CarMap cars={cars} />
    </div>
  );
};

export default App;
