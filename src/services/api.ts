import axios from 'axios';
import { Car } from '../types/Car';

const API_URL = 'https://test.tspb.su/test-task/vehicles';

export const fetchCars = async (): Promise<Car[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};
