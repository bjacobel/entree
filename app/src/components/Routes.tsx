import { Switch, Route } from 'wouter';

import Main from './Main';
import RecipeBox from './RecipeBox';
import Recipe from './Recipe';
import Error from './Error';
import NotFound from './NotFound';
import RequireAuth from './auth/RequireAuth';
import Login from './auth/Login';
import PrimaryLayout from './PrimaryLayout';

export default () => (
  <Switch>
    <Route component={Main} path="/" />
    <Route component={Login} path="/Login" />
    <RequireAuth>
      <PrimaryLayout>
        <Route path="/box">
          <RecipeBox />
        </Route>
        <Route path="/recipe/:id/:slug">
          <Recipe />
        </Route>
      </PrimaryLayout>
    </RequireAuth>
    <Route component={Error} path="/error" />
    <Route component={NotFound} path="*" />
  </Switch>
);
