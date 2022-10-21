import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css';
import Home from "./components/Home";
import Nav from './components/Nav';
import Secured from "./components/Secured";

function App() {
  return (
    <div>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/secured" element={<Secured />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
