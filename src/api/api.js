import { BACKEND_URL } from '../config.js';

export const createProducts = async (products) => {
    const response = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(products)
    });
    const result = await response.json();
    return result.data;
}

export const getProducts = async () => {
    const response = await fetch(BACKEND_URL);
    const result = await response.json();
    return result.data;
}

export const deleteProducts = async (product_code) => {
    const response = await fetch(`${BACKEND_URL}/code/${product_code}`, { // Cambié aquí para que coincida con tu ruta DELETE
        method: 'DELETE'
    });
    const result = await response.json();
    return result.message;
}

export const updateProducts = async (product_code, updatedProductData) => { // Agrega un argumento para los datos actualizados
    const response = await fetch(`${BACKEND_URL}/${product_code}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedProductData) // Envía los datos actualizados
    });
    const result = await response.json();
    return result.message;
}
