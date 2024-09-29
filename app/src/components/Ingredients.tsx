import { useMemo } from 'react';
import { Slider } from '@mantine/core';
import { parseIngredient } from 'parse-ingredient';

import { Recipe } from '../generated/graphql';

type IngredientsProps = {
  ingredients: Recipe['ingredients'];
  scale: number;
  setScale: (scale: number) => void;
};

const PORTION_SIZES = [
  { value: 0.5, label: 'Half' },
  { value: 1, label: 'Standard' },
  { value: 2, label: 'Double' },
  { value: 3, label: '3x' },
  { value: 4, label: '4x' },
];

const Ingredients = ({ ingredients, scale, setScale }: IngredientsProps) => {
  const parsedIngredients = useMemo(
    () =>
      ingredients
        .map(ingr => ({
          ...(ingr ? parseIngredient(ingr)[0] : null),
          key: ingr,
        }))
        .filter(i => !!i),
    [ingredients],
  );

  return (
    <>
      <h3>Ingredient</h3>
      <Slider value={scale} onChange={setScale} marks={PORTION_SIZES} min={0.5} max={4} step={0.5} />
      <ul>
        {parsedIngredients.map(ingr => (
          <li key={ingr.key}>
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
    </>
  );
};

export default Ingredients;
