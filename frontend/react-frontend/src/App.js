import Header from "./components/Header";
import Home from "./components/Home";
import Associations from "./components/Associations";
import Association from "./components/Association";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  

function About() {
  return <h1>About us</h1>;
}

function Contact() {
  return <h1>Contact us</h1>;
}



function App() {
  return (
    <Router >
      <Header />
      <Routes>
        <Route path="/react" element={<Home />}>
          {/* Your default component */}
        </Route>
        <Route path="/react/home" element={<Home />}>
          {/* Your default component */}
        </Route>
        <Route path="/react/association-stats" element={<Associations />}>
          {/* Your about component */}
        </Route>
        <Route path="/react/association-stats/:province/:registration_date" element={<Association />}>
          {/* Your about component */}
        </Route>
        <Route path="/contact" element={<Contact />}>
          {/* Your contact component */}
        </Route>
      </Routes>
      
    </Router>

  );
}

export default App;