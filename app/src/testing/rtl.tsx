import { ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'wouter';
import { memoryLocation } from 'wouter/memory-location';
import { SupabaseClient } from '@supabase/supabase-js';

import Supabase from '../contexts/Supabase';
import { SUPABASE_ANON_KEY, SUPABASE_PROJECT_URL } from '../constants';

const supabase = new SupabaseClient(SUPABASE_PROJECT_URL, SUPABASE_ANON_KEY);

const customRender = (ui: ReactNode, options?: RenderOptions & { route?: string }) => {
  const path = options && options.route ? options.route : '/';
  const { hook } = memoryLocation({ path, static: true });
  return {
    user: userEvent.setup(),
    ...render(
      <Supabase.Provider value={supabase}>
        <Router hook={hook}>{ui}</Router>
      </Supabase.Provider>,
      options,
    ),
  };
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
