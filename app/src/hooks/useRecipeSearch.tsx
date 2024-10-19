import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import fuzzy from 'fuzzy';

import { Recipe } from '../generated/graphql';

const extract = (recipe: Recipe) => `${recipe.title}: ${recipe.ingredients.join(',')}`;

export default (recipes: Recipe[]): [Recipe[], Dispatch<SetStateAction<string>>] => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState<Recipe[]>(recipes);

  useEffect(() => {
    if (searchValue.length) {
      setSearchResults(fuzzy.filter(searchValue, recipes, { extract }).map(({ original }) => original));
    }
  }, [searchValue, setSearchResults, recipes]);

  useEffect(() => {
    if (recipes.length) {
      setSearchResults(recipes);
    }
  }, [setSearchResults, recipes]);

  return [searchResults, setSearchValue];
};
