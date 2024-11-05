// CartContext.js
import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
    items: [], // Almacena los productos del carrito
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingProduct = state.items.find(item => item.product_code === action.payload.product_code);
            if (existingProduct) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.product_code === action.payload.product_code
                            ? { ...item, quantity: item.quantity + action.payload.quantity }
                            : item
                    ),
                };
            } else {
                return {
                    ...state,
                    items: [...state.items, { ...action.payload, quantity: action.payload.quantity }],
                };
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: state.items.filter(item => item.product_code !== action.payload),
            };
        case 'CLEAR_CART':
            return {
                ...state,
                items: [],
            };
        case 'UPDATE_QUANTITY':
            return {
                ...state,
                items: state.items.map(item => 
                    item.product_code === action.payload.product_code
                        ? { ...item, quantity: Math.max(item.quantity + action.payload.amount, 0) } // Cambiado a 0
                        : item
                ).filter(item => item.quantity > 0), // Filtra elementos con cantidad menor a 1
            };
        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addProductToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    const removeProductFromCart = (product_code) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: product_code });
    };

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    const updateProductQuantity = (product_code, amount) => {
        dispatch({ type: 'UPDATE_QUANTITY', payload: { product_code, amount } });
    };

    return (
        <CartContext.Provider value={{ 
            cart: state.items, 
            addProductToCart, 
            removeProductFromCart, 
            clearCart, 
            updateProductQuantity 
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);


