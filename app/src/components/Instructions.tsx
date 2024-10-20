import { css } from '@linaria/core';

import { Recipe } from '../generated/graphql';

const unpaddedList = css`
  padding-left: 15px;
`;

const Instructions = ({ steps }: { steps: Recipe['steps'] }) => (
  <>
    <h3>Instructions</h3>
    <ol className={unpaddedList}>
      {steps.map(step => (
        <li style={{ marginBottom: '10px' }} key={step}>
          {step}
        </li>
      ))}
    </ol>
  </>
);

export default Instructions;
