"use client";

import { useState } from "react";
import Link from "next/link";

export default function ShowRecipeIndex({ categories, allRecipes }) {
  const [category, setCategory] = useState("Todas");
  const recipes =
    category === "Todas"
      ? allRecipes
      : allRecipes.filter((item) => item.category === category);

  return (
    <section>
      <button
        type="button"
        onClick={() => setCategory("Todas")}
        className="p-2 border border-indigo-300 rounded-md"
      >
        Todas
      </button>
      {categories.map((c) => (
        <button
          key={c}
          type="button"
          onClick={() => setCategory(c)}
          className="p-2 border border-indigo-300 rounded-md"
        >
          {c}
        </button>
      ))}
      {recipes ? (
        <ul className="flex flex-wrap">
          {recipes.map((recipe) => (
            <li key={recipe.title}>
              <article>
                <h2>{recipe.title}</h2>
                <p>Porciones:{recipe.serves}</p>
                <p>Tiempo de preparación: {recipe.time}</p>
                <time dateTime={recipe.date}>
                  {new Date(recipe.date).toLocaleDateString("es-AR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <img src={recipe.image} alt={recipe.title} />
                <Link href={`/recetas/${recipe.slug}`}>
                  Ver receta completa "{recipe.slug}"
                </Link>
              </article>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay recetas</p>
      )}
    </section>
  );
}
