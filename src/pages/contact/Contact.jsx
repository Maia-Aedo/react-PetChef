import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css'

export const Contact = () => {
    // Definimos propiedades de usuario (inician vacías)
    const [user, setUser] = useState({ name: '', email: '' });
    // Propiedades para las recetas tambien inician vacías
    const [recipe, setRecipe] = useState({ title: '', description: '' });
    const navigate = useNavigate();

    // Función para guardar la receta en localStorage
    const createRecipe = (newRecipe) => {
        const existingRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
        localStorage.setItem('recipes', JSON.stringify([...existingRecipes, newRecipe]));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Objeto de receta
        const newRecipe = {
            id: Date.now(), // Genera id único
            title: recipe.title,
            description: recipe.description,
            user: {
                name: user.name,
                email: user.email,
            },
        };

        try {
            createRecipe(newRecipe); // Guardamos en localStorage
            alert('Receta creada con éxito');
            // Vacía formularios
            setUser({ name: '', email: '' });
            setRecipe({ title: '', description: '' });
            // Redirección a lista de recetas
            navigate('/recetas')
        } catch (err) {
            console.error(err);
            alert('Error al crear la receta');
        }
    };

    return (
        <div className="contact-form-container">
            <div className="contact-us">
                <div className="header">
                    <h1>¿Quieres enviar tu receta?</h1>
                    <h2>Déjanos tu receta siendo lo más resumida y entendible posible.<br />Pronto la podrás ver en nuestra web!</h2>
                </div>
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        {/* Campo para Nombre */}
                        <div className="field">
                            <label htmlFor="name">Ingresa tu nombre</label>
                            <input
                                type="text"
                                id="name"
                                value={user.name}
                                onChange={(e) =>
                                    setUser({ ...user, name: e.target.value })
                                }
                                required
                            />
                        </div>

                        {/* Campo para Email */}
                        <div className="field">
                            <label htmlFor="email">Ingresa tu email</label>
                            <input
                                type="email"
                                id="email"
                                value={user.email}
                                onChange={(e) =>
                                    setUser({ ...user, email: e.target.value })
                                }
                                required
                            />
                        </div>

                        {/* Título de receta */}
                        <div className="field">
                            <label htmlFor="title">Título o nombre de la receta</label>
                            <input
                                type="text"
                                id="title"
                                value={recipe.title}
                                onChange={(e) =>
                                    setRecipe({ ...recipe, title: e.target.value })
                                }
                                required
                            />
                        </div>

                        {/* Descripción de Receta */}
                        <div className="field">
                            <label htmlFor="description">Escribe tu receta</label>
                            <textarea
                                id="description"
                                rows="4"
                                value={recipe.description}
                                onChange={(e) =>
                                    setRecipe({ ...recipe, description: e.target.value })
                                }
                                required
                            ></textarea>
                        </div>

                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
