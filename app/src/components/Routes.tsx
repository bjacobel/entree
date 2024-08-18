import { Switch, Route } from 'wouter';

import Main from './Main';
import RecipeBox from './RecipeBox';
import Recipe from './Recipe';
import Error from './Error';
import NotFound from './NotFound';
import Auth from './Auth/RequireAuth';
import Login from './Auth/Login';

export default () => (
  <Switch>
    <Route component={Main} path="/" />
    <Route component={Login} path="/Login" />
    <Route path="/box">
      <Auth>
        <RecipeBox />
      </Auth>
    </Route>
    <Route path="/recipe/:id/:slug">
      <Auth>
        <Recipe />
      </Auth>
    </Route>
    <Route component={Error} path="/error" />
    <Route component={NotFound} path="*" />
  </Switch>
);
