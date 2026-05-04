import ShowRecipeIndex from "@/components/ShowRecipeIndex";
import { getAllRecipesMetadata } from "@/lib/recipes";

export default async function RecipePage() {
  const allRecipes = await getAllRecipesMetadata();
  console.log('allRecipes:',allRecipes)
  const categories = [...new Set(allRecipes.map((recipe) => recipe.category))];

  return (
    <main
      className="relative bg-cover md:bg-top bg-center md:h-[2000px] scrollbar-hide h-svh overflow-scroll text-center"
      style={{ backgroundImage: "url('/congelados2500x2500.webp')" }}
    >
      <header>
        <h1 className="md:text-4xl text-xl md:mb-2 mb-0">Recetas veganas</h1>

        <p>Recetas veganas</p>
        <p className="md:text-4xl text-xl md:mb-8 mb-4 ">
          Todas las recetas ordenadas por fecha
        </p>
      </header>
      <ShowRecipeIndex categories={categories} allRecipes={allRecipes} />
    </main>
  );
}
