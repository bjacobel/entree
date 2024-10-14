/* eslint-disable import/extensions */

import { createClient } from 'jsr:@supabase/supabase-js';
import recipe from './example-response.json' with { type: 'json' };
import type { Recipe } from './recipe.ts';

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

    // // And we can run queries in the context of our authenticated user
    // const { data, error } = await supabaseClient.from('users').select('*');
    // if (error) throw error;

    const { data: recipeBoxData, error: recipeBoxQueryError } = await supabaseClient
      .from('recipe_box_owner')
      .select('recipe_box');
    if (recipeBoxQueryError) throw recipeBoxQueryError;
    if (!recipeBoxData) throw new Error(`No recipe box found for user ${user.email}`);

    const { title, sourceUrl, image, extendedIngredients, analyzedInstructions } = recipe as Recipe;
    const steps = analyzedInstructions.flatMap((inst) => inst.steps.map((step) => step.step));
    const ingredients = extendedIngredients.map((ing) => ing.original);

    const { data, error: insertError } = await supabaseClient.from('recipe').insert({
      url: sourceUrl,
      created_by: user.id,
      title,
      steps,
      ingredients,
      photo_url: image,
      recipe_box: recipeBoxData[0].recipe_box,
    });
    if (insertError) throw insertError;

    return new Response(JSON.stringify({ user, data }), {
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
