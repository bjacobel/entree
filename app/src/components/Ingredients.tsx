import { useMemo } from 'react';
import { Ingredient, parseIngredient } from 'parse-ingredient';

import { Recipe } from '../generated/graphql';

type IngredientsProps = {
  ingredients: Recipe['ingredients'];
  scale: number;
};

const Ingredients = ({ ingredients, scale }: IngredientsProps) => {
  const parsedIngredients: Ingredient[] = useMemo(
    () => ingredients.map(i => (i ? parseIngredient(i)[0] : null)).filter(i => !!i),
    [ingredients],
  );
  return (
    <ul>
      {parsedIngredients.map((ingr, i) => (
        <li key={ingredients[i]}>
          <span>
            {!!ingr.quantity && ingr.quantity * scale}
            {!!ingr.quantity2 && <span>-{ingr.quantity2 * scale}</span>}
            <span> </span>
            <span>
              {ingr.unitOfMeasure} {ingr.description}
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Ingredients;
