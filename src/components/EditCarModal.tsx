import React, { useState } from 'react';
import { Car } from '../types/Car';
import { Modal, Button, Form } from 'react-bootstrap';

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
    <Modal show onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Car</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Model</Form.Label>
            <Form.Control
              type="text"
              value={model}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setModel(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              value={price}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrice(Number(e.target.value))}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>Cancel</Button>
        <Button variant="primary" onClick={handleSave}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditCarModal;
