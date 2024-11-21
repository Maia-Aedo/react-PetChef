import React, { useEffect, useState } from 'react';
import './Recipes.css';

export const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  // Cargar recetas desde localStorage al montar el componente
  useEffect(() => {
    const savedRecipes = localStorage.getItem('recipes');
    if (savedRecipes) {
      setRecipes(JSON.parse(savedRecipes));
    }
  }, []);

  return (
    <div className="recipes-container">
      <h2 className="recipes-heading">Recetas</h2>
      <div className="recipes-card-container">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div key={recipe.id} className="recipes-card">
              <h3 className="recipes-title">{recipe.title}</h3>
              <p className="recipes-description">{recipe.description}</p>
            </div>
          ))
        ) : (
          <p className="no-recipes">No hay recetas disponibles.</p>
        )}
      </div>
    </div>
  );
};
