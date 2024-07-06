import React, { useState, useEffect } from 'react';
import { fetchCars } from '../services/api';
import { Car } from '../types/Car';
import CarCard from './CarCard';
import EditCarModal from './EditCarModal';

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
    <div>
      <div className="sort-buttons">
        <button onClick={() => handleSort('year')}>Sort by Year</button>
        <button onClick={() => handleSort('price')}>Sort by Price</button>
      </div>
      <div className="car-list">
        {cars.map(car => (
          <CarCard key={car.id} car={car} onEdit={handleEdit} onDelete={handleDelete} />
        ))}
      </div>
      {editCar && <EditCarModal car={editCar} onSave={handleSave} onCancel={() => setEditCar(null)} />}
    </div>
  );
};

export default CarList;
