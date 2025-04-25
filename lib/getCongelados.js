import { supabase } from "@/utils/supabase/server";

export async function getCongelados() {
  const { data, error } = await supabase
    .from("users")
    .select(
      `
          *,
          category (
            *,
            menu (*)
          )
        `
    )
    .eq("resto_name", "UmamiVeg")
    .like("category.name", "congelados-%");
  console.log("Recibido de UMAMIVEG:::::", data);
  if (error) {
    return false;
  }
  const menu = data[0].category
  return menu;
}
