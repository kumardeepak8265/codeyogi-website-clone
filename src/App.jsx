import Home from "./Component/Home";
import Works from "./Component/Works";
import About from "./Component/About";
import Curriculum from "./Component/Curriculum";
import Contact from "./Component/Contact";
import NavBar from "./NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Works />
      <Curriculum />
      <Contact />
    </div>
  );
}

export default App;
