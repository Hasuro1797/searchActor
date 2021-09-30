import {Route, Switch} from 'react-router-dom';
import { routes } from './helpers/routes';
import DetailPage from './pages/DetailPage';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
function App() {
  return (
    <>
      <Switch>
        <Route exact path={routes.home} component={HomePage}/>
        <Route exact path={routes.datail} component={DetailPage}/>
        <Route path={routes.error} component={ErrorPage}/>
      </Switch>
    </>
  );
}

export default App;
