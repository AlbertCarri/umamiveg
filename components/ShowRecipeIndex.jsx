"use client";

import { useState } from "react";
import Image from "next/image";
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
        className="p-2 border mx-2 border-indigo-300 rounded-md"
      >
        Todas
      </button>
      {categories.map((c) => (
        <button
          key={c}
          type="button"
          onClick={() => setCategory(c)}
          className="p-2 border mx-2 border-indigo-300 rounded-md"
        >
          {c}
        </button>
      ))}
      {recipes ? (
        <ul className="flex flex-wrap">
          {recipes.map((recipe) => (
            <li key={recipe.title}>
              <article className="w-52 bg-slate-700/80 p-2 rounded-lg mx-4 shadow-xl shadow-black">
                <h2 className="text-md">{recipe.title}</h2>
                <p className="text-xs">Porciones:{recipe.serves}</p>
                <p className="text-xs">Tiempo de preparación: {recipe.time}</p>
                <time dateTime={recipe.date}>
                  {new Date(recipe.date).toLocaleDateString("es-AR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  width={200}
                  height={200}
                  className="w-[200px] h-[200px] object-cover"
                />
                <Link
                  href={`/recetas/${recipe.slug}`}
                  className="mt-4 inline-block bg-red-800 text-white hover:bg-red-600 p-2 rounded-md"
                >
                  Ver receta completa
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
