// api.js
import axios from 'axios';


const API_URL = 'http://localhost:3030/api/products'; // Cambia esto si usas un dominio diferente

// Obtener todos los productos
// Obtener todos los productos
export const getProducts = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data; // Devuelve los productos
    } catch (error) {
        console.error("Error obteniendo productos:", error);
        throw error;
    }
};


// Obtener productos por categoría
// api.js
export const getProductsByCategory = async (category) => {
    if (!category || typeof category !== 'string') {
        throw new Error("Categoría no válida");
    }

    try {
        const response = await fetch(`${API_URL}/products?category=${encodeURIComponent(category)}`);
        const products = await response.json();
        
        return products.map(product => ({
            id: product.id,
            product_name: product.product_name,
            product_description: product.product_description,
            product_code: product.product_code,
            price: parseFloat(product.price), // Asegúrate de que esto se convierta a un número
            image_url: product.image_url,
            category: product.category
        }));
    } catch (error) {
        console.error("Error obteniendo productos por categoría:", error);
        throw error;
    }
};

// Agregar un nuevo producto
export const addProduct = async (product) => {
    try {
        const response = await axios.post(API_URL, product);
        return response.data; // Devuelve el producto creado
    } catch (error) {
        console.error("Error agregando producto:", error);
        throw error;
    }
};

// Actualizar un producto
export const updateProduct = async (id, product) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, product);
        return response.data; // Devuelve el producto actualizado
    } catch (error) {
        console.error("Error actualizando el producto:", error);
        throw error;
    }
};

// Eliminar un producto
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

// Agregar una nueva orden
export const addOrder = async (order) => {
    try {
        const response = await axios.post(`${API_URL}/orders`, order);
        return response.data; // Devuelve la orden creada
    } catch (error) {
        console.error("Error agregando orden:", error);
        throw error;
    }
};

// Obtener todos los ítems de órdenes
export const getOrderItems = async () => {
    try {
        const response = await axios.get(`${API_URL}/order_items`);
        return response.data; // Devuelve los ítems de órdenes
    } catch (error) {
        console.error("Error obteniendo ítems de órdenes:", error);
        throw error;
    }
};

// Agregar un nuevo ítem de orden
export const addOrderItem = async (orderItem) => {
    try {
        const response = await axios.post(`${API_URL}/order_items`, orderItem);
        return response.data; // Devuelve el ítem de orden creado
    } catch (error) {
        console.error("Error agregando ítem de orden:", error);
        throw error;
    }
};

// Register 

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/api/register`, userData);
        return response.data; // Devuelve la respuesta del registro
    } catch (error) {
        console.error("Error registrando el usuario:", error);
        throw error;
    }
};

// Iniciar sesión
export const loginUser = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/login`, credentials);
        return response.data; // Devuelve el token si las credenciales son válidas
    } catch (error) {
        console.error("Error iniciando sesión:", error);
        throw error;
    }
};