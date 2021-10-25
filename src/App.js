import './App.css';
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import Login from './pages/Login';
import { AuthProvider } from './contexts/AuthContext';
import useAuth from './hooks/useAuth';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

function RotasProtegidas(props) {
  const auth = useAuth();

  return (
    <Route
      render={() => (auth.token ? props.children : <Redirect to="/login" />)}
    />
  );
}

function App() {

  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <RotasProtegidas>
              <Route path="/perfil" component={Perfil} />
            </RotasProtegidas>
          </Switch>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
