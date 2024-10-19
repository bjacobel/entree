import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import fuzzy from 'fuzzy';

import { Recipe } from '../generated/graphql';

const extract = (recipe: Recipe) => recipe.title;

export default (recipes: Recipe[]): [Recipe[], Dispatch<SetStateAction<string>>] => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState<Recipe[]>(recipes);

  useEffect(() => {
    if (searchValue.length) {
      setSearchResults(fuzzy.filter(searchValue, recipes, { extract }).map(({ original }) => original));
    } else {
      setSearchResults(recipes);
    }
  }, [searchValue, setSearchResults, recipes]);

  // @TODO: If recipes updates on us, we should update the search filter. Currently this just cancels search
  useEffect(() => {
    if (recipes.length) {
      setSearchResults(recipes);
    }
  }, [setSearchResults, recipes]);

  return [searchResults, setSearchValue];
};
