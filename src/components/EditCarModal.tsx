import React, { useState } from 'react';
import { Car } from '../types/Car';

interface EditCarModalProps {
  car: Car;
  onSave: (car: Car) => void;
  onCancel: () => void;
}

const EditCarModal: React.FC<EditCarModalProps> = ({ car, onSave, onCancel }) => {
  const [name, setName] = useState(car.name);
  const [model, setModel] = useState(car.model);
  const [price, setPrice] = useState(car.price);

  const handleSave = () => {
    onSave({ ...car, name, model, price });
  };

  return (
    <div className="modal">
      <h2>Edit Car</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Model:
        <input type="text" value={model} onChange={(e) => setModel(e.target.value)} />
      </label>
      <label>
        Price:
        <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
      </label>
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default EditCarModal;
