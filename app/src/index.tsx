/* eslint-disable import/no-import-module-exports */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createClient } from '@supabase/supabase-js';
import { HelmetProvider } from 'react-helmet-async';
import { ApolloProvider } from '@apollo/client';

import Analytics from './components/Analytics';
import Routes from './components/Routes';
import { setup as sentrySetup } from './services/errors';
import { IS_PROD, SUPABASE_ANON_KEY, SUPABASE_PROJECT_URL } from './constants';
import { register } from './utils/sw-loader';
import PWAUpdater from './components/PWAUpdater';
import ErrorBoundary from './components/errors/ErrorBoundary';
import CommonMeta from './components/CommonMeta';
import Supabase from './contexts/Supabase';
import { createSupabaseApolloClient } from './services/SupabaseApolloClient';
import MantineThemeProvider from './components/MantineThemeProvider';

sentrySetup();
const supabase = createClient(SUPABASE_PROJECT_URL, SUPABASE_ANON_KEY);
const apolloSupabaseClient = createSupabaseApolloClient(supabase);

const rootEl = document.getElementById('main');
const root = createRoot(rootEl!);
const render = () => {
  root.render(
    <StrictMode>
      <HelmetProvider>
        <Supabase.Provider value={supabase}>
          <ApolloProvider client={apolloSupabaseClient}>
            <MantineThemeProvider>
              <ErrorBoundary>
                <PWAUpdater />
                <CommonMeta />
                <Analytics />
                <Routes />
              </ErrorBoundary>
            </MantineThemeProvider>
          </ApolloProvider>
        </Supabase.Provider>
      </HelmetProvider>
    </StrictMode>,
  );
};

register();

if (module.hot && !IS_PROD) {
  module.hot.accept('./components/Routes', () => {
    render();
  });
}

render();
