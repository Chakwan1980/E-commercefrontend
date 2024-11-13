import React, { useState, useEffect } from 'react';
import { getAllBlogs } from '../api/blogApi.js'; // Asegúrate de configurar esta API en tu backend
import './BlogPage.css'; // Archivo de estilos CSS
import BlogPostContainer from '../components/BlogContainer.js';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const data = await getAllBlogs();
                setBlogs(data);
            } catch (error) {
                console.error("Error al cargar los artículos:", error);
            }
        };
        fetchBlogs();
    }, []);

    return (
        <div className="blog-page">
            <h1>Blog de Bordado Artesanal</h1>
            <p>Inspirado en la vida diaria y el arte del bordado.</p>
    
            {/* Cerrar la etiqueta BlogPostContainer adecuadamente */}
            <BlogPostContainer />
    
        
           
        </div>
    );
}; // Agregar la llave de cierre aquí para cerrar la función BlogPage




export default BlogPage;
