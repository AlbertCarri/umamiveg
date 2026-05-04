import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

const RECIPES_DIR = path.join(process.cwd(), "content/recipes");

export async function getAllRecipesMetadata() {
  const allRecipes = fs.readdirSync(RECIPES_DIR);
  const recipes = await Promise.all(
    allRecipes
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const slug = file.replace(".mdx", "");
        const { metadata: mdxModule } = await import(
          `@/content/recipes/${slug}.mdx`
        );
        console.log("mdxModule.metadata::", mdxModule);
        return { ...mdxModule, slug: slug };
      }),
  );

  return recipes;
}

export function getAllSlugs() {
  const slugs = fs.readdirSync(RECIPES_DIR);
  return slugs.map((slug) => slug.replace(".mdx", ""));
}

export async function getRecipeBySlug(slug) {
  const filePath = `../content/recipe/${slug}.mdx`;
  console.log("slug:", slug);
  const mdxModule = await import(filePath);
  if (!mdxModule) return notFound();
  return { metadata: mdxModule.metadata, Content: mdxModule.default };
}
