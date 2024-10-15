import { useMemo } from 'react';
import { Slider } from '@mantine/core';
import { parseIngredient } from 'parse-ingredient';
import { css } from '@linaria/core';

import { Recipe } from '../generated/graphql';

const slider = css`
  max-width: 400px;
  padding-bottom: 50px;
`;

const unpaddedList = css`
  padding-left: 15px;
`;

type IngredientsProps = {
  ingredients: Recipe['ingredients'];
  scale: number;
  setScale: (scale: number) => void;
};

const PORTION_SIZES = [
  { value: 0.5, label: 'Half' },
  { value: 1, label: 'Standard' },
  { value: 2, label: 'Double' },
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
      <h3>Ingredients</h3>
      <Slider className={slider} value={scale} onChange={setScale} marks={PORTION_SIZES} min={0.5} max={2} step={0.5} />
      <ul className={unpaddedList}>
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
