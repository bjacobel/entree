import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Button, Group, Image, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { styled } from '@linaria/react';
import { Link, useSearch } from 'wouter';

import { useSupabase } from '../contexts/Supabase';
import { Recipe } from '../generated/graphql';

const StyledForm = styled.form`
  div {
    margin-bottom: 10px;
  }
`;

const AddRecipe = () => {
  const supabase = useSupabase();
  const search = useSearch();
  const [parseResult, setParseResult] = useState<Partial<Recipe>>();
  const [insertedId, setInsertedId] = useState(null);

  const urlForm = useForm({
    mode: 'controlled',
    initialValues: {
      recipeUrl: '',
    },
    validate: {
      recipeUrl: value =>
        /^(https?:\/\/)?([0-9a-zA-Z]+\.)?[-_0-9a-zA-Z]+\.[0-9a-zA-Z]+\/.+$/.test(value) ? null : 'Invalid URL',
    },
  });

  const recipeForm = useForm({
    mode: 'controlled',
  });

  const parseRecipe = useMutation({
    mutationFn: (recipeUrl: string) =>
      supabase?.functions.invoke<{ recipe: Partial<Recipe> }>('parse-recipe', {
        body: JSON.stringify({
          recipeUrl,
        }),
      }) || Promise.reject(new Error('Recipe parse failed')),
    onSuccess: response => {
      if (response.data) {
        setParseResult(response.data.recipe);
        recipeForm.setValues(response.data.recipe);
      }
    },
  });

  useEffect(() => {
    if (search && !parseResult) {
      const searchParams = new URLSearchParams(search);
      if (searchParams.has('url')) {
        urlForm.setValues({ recipeUrl: searchParams.get('url')! });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, parseResult]);

  const insertRecipe = useMutation({
    mutationFn: (recipe: Partial<Recipe>) =>
      supabase?.functions.invoke('insert-recipe', {
        body: JSON.stringify({
          recipe,
        }),
      }) || Promise.reject(new Error('Recipe insert failed')),
    onSuccess: response => setInsertedId(response.data.recipe),
  });

  if (insertedId) {
    return (
      <div>
        Recipe added! <Link to={`/recipe/${insertedId}`}>View it now →</Link>
      </div>
    );
  }

  return (
    <>
      {!parseResult && (
        <form onSubmit={urlForm.onSubmit(values => parseRecipe.mutate(values.recipeUrl))}>
          <TextInput
            label="Save a recipe from the web"
            placeholder="Recipe URL"
            key={urlForm.key('recipeUrl')}
            {...urlForm.getInputProps('recipeUrl')}
          />
          <Group justify="flex-end" mt="md">
            <Button type="submit" loading={parseRecipe.isPending}>
              Parse
            </Button>
          </Group>
        </form>
      )}
      {parseResult && (
        <StyledForm onSubmit={recipeForm.onSubmit(values => insertRecipe.mutate(values))}>
          <TextInput label="Title" key={recipeForm.key('title')} {...recipeForm.getInputProps('title')} />
          <TextInput label="URL" key={recipeForm.key('url')} {...recipeForm.getInputProps('url')} />
          <TextInput label="Image URL" key={recipeForm.key('photo_url')} {...recipeForm.getInputProps('photo_url')} />
          <div style={{ maxWidth: '500px' }}>
            <Image
              radius="md"
              src={recipeForm.getValues().photo_url}
              fallbackSrc="https://placehold.co/500x300?text=Recipe%20photo"
            />
          </div>
          <Textarea
            label="Ingredients"
            key={recipeForm.key('ingredients')}
            autosize
            {...recipeForm.getInputProps('ingredients')}
            value={
              Array.isArray(recipeForm.getValues().ingredients)
                ? recipeForm.getValues().ingredients.join('\n')
                : recipeForm.getValues().ingredients
            }
          />
          <Textarea
            label="Steps"
            key={recipeForm.key('steps')}
            autosize
            {...recipeForm.getInputProps('steps')}
            value={
              Array.isArray(recipeForm.getValues().steps)
                ? recipeForm.getValues().steps.join('\n')
                : recipeForm.getValues().steps
            }
          />
          <Group justify="flex-end" mt="md">
            <Button type="submit" loading={insertRecipe.isPending}>
              Save Recipe to Box
            </Button>
          </Group>
        </StyledForm>
      )}
    </>
  );
};

export default AddRecipe;
