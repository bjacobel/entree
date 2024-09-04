import { Switch, Route } from 'wouter';
import { Suspense } from 'react';

import Main from './Main';
import RecipeBox from './RecipeBox';
import Recipe from './Recipe';
import Error from './Error';
import NotFound from './NotFound';
import RequireAuth from './auth/RequireAuth';
import Login from './auth/Login';
import PrimaryLayout from './PrimaryLayout';
import Loading from './Loading';

export default () => (
  <Switch>
    <Route component={Main} path="/" />
    <Route component={Login} path="/Login" />
    <RequireAuth>
      <PrimaryLayout>
        <Route path="/box">
          <Suspense fallback={<Loading />}>
            <RecipeBox />
          </Suspense>
        </Route>
        <Route path="/recipe/:id/:slug">
          <Suspense fallback={<Loading />}>
            <Recipe />
          </Suspense>
        </Route>
      </PrimaryLayout>
    </RequireAuth>
    <Route component={Error} path="/error" />
    <Route component={NotFound} path="*" />
  </Switch>
);
