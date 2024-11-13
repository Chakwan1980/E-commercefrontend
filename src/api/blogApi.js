
import axios from 'axios';


const API_URL = 'http://localhost:3030/api/blog'; 

// Obtener todas las entradas del blog
export const getAllBlogs = async () => {
    try {
      const response = await axios.get(`${API_URL}`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener las entradas del blog", error);
      throw error;
    }
  };
  
  // Obtener una entrada de blog por ID
  export const getBlogById = async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener la entrada del blog", error);
      throw error;
    }
  };
  
  // Crear una nueva entrada de blog
  export const createBlog = async (blogData) => {
    try {
      const response = await axios.post(`${API_URL}`, blogData);
      return response.data;
    } catch (error) {
      console.error("Error al crear la entrada del blog", error);
      throw error;
    }
  };
  
  // Actualizar una entrada de blog por ID
  export const updateBlog = async (id, blogData) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, blogData);
      return response.data;
    } catch (error) {
      console.error("Error al actualizar la entrada del blog", error);
      throw error;
    }
  };
  
  // Eliminar una entrada de blog por ID
  export const deleteBlogById = async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error al eliminar la entrada del blog", error);
      throw error;
    }
  };