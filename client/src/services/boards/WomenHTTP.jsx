import axios from 'axios'
import { urlDB } from '../UrlDB';

export const WomenHTTP = () => {
  const getAllData = async () => {
    const response = await axios.get(`${urlDB}/woman`);
    return response.data
  };

  const createWoman = async (data) => {
    const response = await axios.post(`${urlDB}/women`, data);
    return response
  }

  const deletewoman = async (id) => {
    const response = await axios.delete(`${urlDB}/women/${id}`);
    return response
  }

  const getWomanById = async (id) => {
    const response = await axios.get(`${urlDB}/women/${id}`);
    return response.data
  }

  const updateWoman = async (data) => {
    const response = await axios.put(`${urlDB}/women`, data);
    return response.data;
  };

  return {
    getAllData,
    createWoman,
    deletewoman,
    deletewoman,
    getWomanById,
    updateWoman
  };
};


export default WomenHTTP;
