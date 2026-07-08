import { notFound } from "next/navigation";
import { getAllSlugs } from "@/lib/recipes";

export async function gerenateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function Page({ params }) {
  const { slug } = await params;
  let metadata, Recipe;
  try {
    ({ metadata, default: Recipe } = await import(
      `@/content/recipes/${slug}.mdx`
    ));
  } catch {
    notFound();
  }

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
