/* eslint-disable import/extensions */

import { createClient } from 'jsr:@supabase/supabase-js';
import type { SpoonacularRecipe } from './spoonacular.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req: Request) => {
  if (req.method !== 'OPTIONS' && req.method !== 'POST') {
    return new Response('405 Method Not Allowed', { status: 405 });
  }

  // This is needed if you're planning to invoke your function from a browser.
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // Create a Supabase client with the Auth context of the logged in user.
    const supabaseClient = createClient(
      // Supabase API URL - env var exported by default.
      Deno.env.get('SUPABASE_URL') ?? '',
      // Supabase API ANON KEY - env var exported by default.
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      // Create client with Auth context of the user that called the function.
      // This way your row-level-security (RLS) policies are applied.
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization')! },
        },
      },
    );

    const Authorization = req.headers.get('Authorization');
    if (!Authorization) {
      return new Response('401 Unauthorized', {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 401,
      });
    }

    // First get the token from the Authorization header
    const token = req.headers.get('Authorization')!.replace('Bearer ', '');

    // Now we can get the session or user object
    const {
      data: { user },
    } = await supabaseClient.auth.getUser(token);
    if (!user) throw new Error('User not found in request context');

    const { recipeUrl } = await req.json();
    const parsingResult = (await fetch(
      `https://api.spoonacular.com/recipes/extract?${new URLSearchParams({
        url: recipeUrl,
      }).toString()}`,
      {
        headers: {
          'X-Api-Key': Deno.env.get('SPOONACULAR_API_KEY')!,
        },
      },
    ).then(resp => resp.json())) as SpoonacularRecipe;
    const { title, sourceUrl, image, extendedIngredients, analyzedInstructions } = parsingResult;
    const steps = analyzedInstructions.flatMap(inst => inst.steps.map(step => step.step));
    const ingredients = extendedIngredients.map(ing => ing.original);

    const recipe = {
      url: sourceUrl,
      title,
      steps,
      ingredients,
      photo_url: image,
    };

    return new Response(JSON.stringify({ recipe }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    });
  }
});
