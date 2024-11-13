import React, { useState } from "react";
import axios from "axios";

const CreateBlogPost = ({ onNewBlog }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    const [image_url, setImageUrl] = useState("");
    const [tags, setTags] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newPost = { title, content, author, image_url, tags };
            await axios.post("/api/blog", newPost);
            alert("Artículo creado con éxito");
            
            // Llama a onNewBlog para actualizar la lista de artículos en BlogPage2
            onNewBlog();

            // Limpia los campos después de enviar
            setTitle("");
            setContent("");
            setAuthor("");
            setImageUrl("");
            setTags("");
        } catch (error) {
            console.error("Error al crear el artículo:", error);
            alert("Hubo un error al crear el artículo");
        }
    };

    return (
        <div className="create-blog-post">
            <h2>Crear un Nuevo Artículo</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Título"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Contenido"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                ></textarea>
                <input
                    type="text"
                    placeholder="Autor"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="URL de la Imagen"
                    value={image_url}
                    onChange={(e) => setImageUrl(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Etiquetas (separadas por comas)"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                />
                <button type="submit">Crear Artículo</button>
            </form>
        </div>
    );
};

export default CreateBlogPost;