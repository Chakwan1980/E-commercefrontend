
import axios from 'axios';


const API_URL = 'http://localhost:3030/api/products'; 

//get
export const getProducts = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data; // Devuelve los productos
    } catch (error) {
        console.error("Error obteniendo productos:", error);
        throw error;
    }
};


// get by id
export const getProductsByCategory = async (category) => {
    if (!category || typeof category !== 'string') {
      throw new Error("Categoría no válida");
    }
  
    try {
      const response = await axios.get(`${API_URL}?category=${encodeURIComponent(category)}`);
      return response.data;
    } catch (error) {
      console.error("Error obteniendo productos por categoría:", error);
      throw error;
    }
  };
// post
export const addProduct = async (product) => {
    try {
        const response = await axios.post(API_URL, product);
        return response.data; // Devuelve el producto creado
    } catch (error) {
        console.error("Error agregando producto:", error);
        throw error;
    }
};

// put
export const updateProduct = async (id, product) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, product);
        return response.data; // Devuelve el producto actualizado
    } catch (error) {
        console.error("Error actualizando el producto:", error);
        throw error;
    }
};

// delete
export const deleteProduct = async (product_code) => {
    try {
        const response = await axios.delete(`${API_URL}/code/${product_code}`);
        return response.data; // Devuelve mensaje de eliminación
    } catch (error) {
        console.error("Error eliminando el producto:", error);
        throw error;
    }
};

/** */

// Obtener todas las órdenes
export const getOrders = async () => {
    try {
        const response = await axios.get(`${API_URL}/orders`);
        return response.data; // Devuelve las órdenes
    } catch (error) {
        console.error("Error obteniendo órdenes:", error);
        throw error;
    }
};

export const getProductPriceBySize = async (id, size) => {
    if (!id || !size) {
        throw new Error("ID del producto y talla son necesarios");
    }

    try {
        const response = await axios.get(`${API_URL}/${id}/price`, {
            params: { size } // Agregar `size` como parámetro de consulta
        });
        return response.data.price; // Devuelve el precio específico para la talla
    } catch (error) {
        console.error("Error obteniendo el precio por talla:", error);
        throw error;
    }
};