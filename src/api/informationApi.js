

import axios from 'axios';

const API_URL = 'http://localhost:3030/api/information';
//get
export const getAllInformation = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data; // Devuelve todas las entradas de información
    } catch (error) {
        console.error("Error obteniendo información:", error);
        throw error;
    }
};

// post
export const addInformation = async (information) => {
    try {
        const response = await axios.post(API_URL, information, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error agregando información:", error.response ? error.response.data : error.message);
        throw error;
    }
};

// put
export const updateInformation = async (id, information) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, information);
        return response.data; // Devuelve la información actualizada
    } catch (error) {
        console.error("Error actualizando la información:", error);
        throw error;
    }
};

// delete
export const deleteInformation = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data; // Devuelve mensaje de eliminación
    } catch (error) {
        console.error("Error eliminando la información:", error);
        throw error;
    }
};
