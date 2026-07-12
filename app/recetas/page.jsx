import ShowRecipeIndex from "@/components/ShowRecipeIndex";
import { getAllRecipesMetadata } from "@/lib/recipes";

export default async function RecipePage() {
  const allRecipes = await getAllRecipesMetadata();
  const categories = [...new Set(allRecipes.map((recipe) => recipe.category))];

  return (
    <main
      className="relative bg-cover md:bg-top bg-center md:h-[2000px] scrollbar-hide h-svh overflow-scroll text-center"
      style={{ backgroundImage: "url('/congelados2500x2500.webp')" }}
    >
      <header>
        <h1 className="text-4xl mt-2 mb-4">Recetas veganas</h1>

        <p className="md:text-2xl mb-4 ">
          Ordenadas por fecha
        </p>
      </header>
      <ShowRecipeIndex categories={categories} allRecipes={allRecipes} />
    </main>
  );
}
