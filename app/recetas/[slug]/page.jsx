import { notFound } from "next/navigation";
import { getAllSlugs } from "@/lib/recipes";
import Image from "next/image";

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
    <article className="flex flex-col justify-center items-center w-2/3 mx-auto mt-4 mb-8">
      <header className="text-center">
        <h1 className="text-5xl">{metadata.title}</h1>
        <p>Publicado el {metadata.date}</p>
        
        {metadata.image && (
          <Image
            src={metadata.image}
            alt={`imagen de la receta ${metadata.title}`}
            width={400}
            height={400}
            className="mx-auto mt-4 rounded-lg"
          />
        )}
        <p>Tiempo de preparación: {metadata.time}</p>
      </header>
      <section className="prose max-w-none prose-code:before:content-none prose-code:after:content-none prose-code:bg-emerald-800 prose-code:text-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-medium prose-headings:text-white prose-p:text-stone-300 prose-li:text-stone-300 prose-headings:mt-8 prose-headings:font-semibold prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white">
        <Recipe />
      </section>
    </article>
  );
}
