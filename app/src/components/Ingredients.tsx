import { useMemo } from 'react';
import { Slider, Text } from '@mantine/core';
import { parseIngredient } from 'parse-ingredient';
import { formatQuantity } from 'format-quantity';
import { css } from '@linaria/core';

import { Recipe } from '../generated/graphql';

const servingSize: Record<number, string> = {
  0.5: 'Half',
  1: 'Standard',
  1.5: '150%',
  2: 'Double',
} as const;

const slider = css`
  max-width: 400px;
`;

const unpaddedList = css`
  padding-left: 20px;
`;

type IngredientsProps = {
  ingredients: Recipe['ingredients'];
  scale: number;
  setScale: (scale: number) => void;
};

const PORTION_SIZES = [{ value: 0.5 }, { value: 1 }, { value: 2 }];

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
      <h3 style={{ marginBottom: '5px' }}>Ingredients</h3>
      <Text size="sm" mb={20}>
        Serving size: {servingSize[scale]}
      </Text>
      <Slider
        label={null}
        className={slider}
        value={scale}
        onChange={setScale}
        marks={PORTION_SIZES}
        min={0.5}
        max={2}
        step={0.5}
        thumbSize={24}
      />
      <ul className={unpaddedList}>
        {parsedIngredients.map(ingr => (
          <li key={ingr.key}>
            <span>
              {!!ingr.quantity && formatQuantity(ingr.quantity * scale)}
              {!!ingr.quantity2 && <span>-{formatQuantity(ingr.quantity2 * scale)}</span>}
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
