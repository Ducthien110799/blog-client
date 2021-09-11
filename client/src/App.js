import Home from "./page/home/Home";
import TopBar from "./components/topBar/TopBar";
import Single from "./page/single/Single";
import Write from "./page/write/Write";
import Settings from "./page/settings/Settings";
import Login from "./page/login/Login";
import Register from "./page/register/Register";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context)
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/register'>
          {user ? <Home /> : <Register />}
        </Route>
        <Route path='/login'>
          {user ? <Home /> : <Login />}
        </Route>
        <Route path='/write'>
          {user ? <Write /> : <Register />}
        </Route>
        <Route path='/post/:postId'>
          <Single />
        </Route>
        <Route path='/settings'>
          {user ? <Settings /> : <Register />}
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
