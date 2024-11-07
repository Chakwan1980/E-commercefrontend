
import axios from 'axios';

const API_URL = 'http://localhost:3030/api/contacts'; // 


export const getAllContacts = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data; // Devuelve todos los contactos
    } catch (error) {
        console.error("Error obteniendo contactos:", error);
        throw error;
    }
};


export const addContact = async (contact) => {
    try {
        const response = await axios.post(API_URL, contact);
        return response.data; // Devuelve el contacto creado
    } catch (error) {
        console.error("Error agregando contacto:", error);
        throw error;
    }
};


export const updateContact = async (id, contact) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, contact);
        return response.data; // Devuelve el contacto actualizado
    } catch (error) {
        console.error("Error actualizando el contacto:", error);
        throw error;
    }
};


export const deleteContact = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data; // Devuelve mensaje de eliminación
    } catch (error) {
        console.error("Error eliminando el contacto:", error);
        throw error;
    }
};
