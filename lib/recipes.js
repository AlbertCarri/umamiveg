import fs from "fs";
import path from "path";

const RECIPES_DIR = path.join(process.cwd(), "content/recipes");

export async function getAllRecipesMetadata() {
  const files = fs.readdirSync(RECIPES_DIR).filter((f) => f.endsWith(".mdx"));

  const recipes = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(".mdx", "");
      const { metadata } = await import(`@/content/recipes/${slug}.mdx`);
      return { ...metadata, slug };
    }),
  );

  return recipes;
}

export function getAllSlugs() {
  const slugs = fs.readdirSync(RECIPES_DIR);
  return slugs.map((slug) => slug.replace(".mdx", ""));
}
