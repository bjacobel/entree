import { Switch, Route } from 'wouter';

import Main from './Main';
import RecipeBox from './RecipeBox';
import Recipe from './Recipe';
import Error from './Error';
import NotFound from './NotFound';
import RequireAuth from './auth/RequireAuth';
import Login from './auth/Login';

export default () => (
  <Switch>
    <Route component={Main} path="/" />
    <Route component={Login} path="/Login" />
    <Route path="/box">
      <RequireAuth>
        <RecipeBox />
      </RequireAuth>
    </Route>
    <Route path="/recipe/:id/:slug">
      <RequireAuth>
        <Recipe />
      </RequireAuth>
    </Route>
    <Route component={Error} path="/error" />
    <Route component={NotFound} path="*" />
  </Switch>
);
