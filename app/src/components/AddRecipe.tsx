import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Button, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

import { useSupabase } from '../contexts/Supabase';

const AddRecipe = () => {
  const supabase = useSupabase();
  const [result, setResult] = useState();

  const form = useForm({
    mode: 'controlled',
    initialValues: {
      recipeUrl: '',
    },
    validate: {
      recipeUrl: value =>
        /^(https?:\/\/)?([0-9a-zA-Z]+\.)?[-_0-9a-zA-Z]+\.[0-9a-zA-Z]+$/.test(value) ? null : 'Invalid URL',
    },
  });

  const parseRecipe = useMutation({
    mutationFn: (recipeUrl: string) =>
      supabase?.functions.invoke('parse-recipe', {
        body: JSON.stringify({
          recipeUrl,
        }),
      }) || Promise.reject(),
    onSuccess: response => setResult(response),
  });

  return (
    <>
      <form onSubmit={form.onSubmit(values => parseRecipe.mutate(values.recipeUrl))}>
        <TextInput
          label="Save a recipe from the web"
          placeholder="Recipe URL"
          key={form.key('recipeUrl')}
          {...form.getInputProps('recipeUrl')}
        />
        <Group justify="flex-end" mt="md">
          <Button type="submit">Save</Button>
        </Group>
      </form>
      {JSON.stringify(result)}
    </>
  );
};

export default AddRecipe;
