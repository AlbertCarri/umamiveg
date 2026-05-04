import {
  getAllRecipesMetadata,
  getRecipeBySlug,
  getAllSlugs,
} from "@/lib/recipes";
import MdxComponent from "@/components/MdxComponent";

/*export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const allRecipes = await getAllRecipesMetadata();
  const recipe = allRecipes.find((r) => r.slug === params.slug);

  if (!recipe) {
    return { title: "Receta no encontrada" };
  }

  return {
    title: recipe.title,
  };
}*/

export default async function Page({ params }) {
  const { slug } = await params;
  const { metadata, default: Recipe } = await import(
    `@/content/recipes/${slug}.mdx`
  );

  /*const components = {
    h1: ({ children }) => (
      <h1 className="text-blue-500 text-6xl">{children}</h1>
    ),
  };*/

  return (
    <main>
      <article>
        <header>
          <h1>{metadata.title}</h1>
          <p>Publicado el {metadata.date}</p>
          <p>Tiempo de preparación: {metadata.time}</p>
          {metadata.image && (
            <img
              src={metadata.image}
              alt={`imagen de la receta ${metadata.title}`}
            />
          )}
        </header>
        <section>
          <div className="prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white">
            <Recipe />
          </div>
        </section>
      </article>
    </main>
  );
}
