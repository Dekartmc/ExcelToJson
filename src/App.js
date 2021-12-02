import React, { Suspense, lazy } from 'react';
// import { useDispatch, useSelector } from 'react-redux'
// import { algo } from './redux/actions/primerActions'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

/* Import Components */
import Loading from './components/Loading';

/* Import Pages */
const Home = lazy(() => import('./pages/Home'));
//const Menu1 = lazy(() => import('./pages/Menu1'));
//const Menu2 = lazy(() => import('./pages/Menu2'));
//const Menu3 = lazy(() => import('./pages/Menu3'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  //const dispatch = useDispatch();
  //const data = useSelector( state => state.mainReducers)

  return (
    // <div className="bg-red-100" onClick={ () => dispatch(algo())}>{data.valor}</div>
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          {/* <Route path="/Menu1" render={(props) => <Menu1 {...props} />}/> */}
          {/* <Route path="/Menu2" render={(props) => <Menu2 {...props} />}/> */}
          {/* <Route path="/Menu3" render={(props) => <Menu3 {...props} />}/> */}
          <Route path="*" component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
