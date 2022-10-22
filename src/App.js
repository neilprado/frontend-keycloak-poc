import {ReactKeycloakProvider} from '@react-keycloak/web'
import keycloak from './Keycloak';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css';
import Home from "./components/Home";
import Nav from './components/Nav';
import Secured from "./components/Secured";
import PrivateRoute from './helpers/PrivateRoute';

function App() {
  return (
    <div>
      <ReactKeycloakProvider authClient={keycloak}>
        <Nav />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/secured" element={
              <PrivateRoute>
                <Secured />
              </PrivateRoute>
            } />
          </Routes>
        </BrowserRouter>
      </ReactKeycloakProvider>
    </div>
  );
}

export default App;
