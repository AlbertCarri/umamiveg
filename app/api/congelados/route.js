import { supabase } from "@/utils/supabase/server";

export async function GET(req) {

    const { data: menu, error } = await supabase
        .from('users')
        .select(`
          *,
          category (
            *,
            menu (*)
          )
        `)
        .eq('resto_name', 'UmamiVeg')
        .like('category.name', 'congelados-%')
    console.log('Recibido de UMAMIVEG:::::', menu)
    if (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    return new Response(JSON.stringify(menu), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}
