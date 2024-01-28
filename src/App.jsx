import "./App.css";
import "./index.css";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experiences from "./components/experiences/Experiences";
import Projects from "./components/projects/Projects";
import Academics from "./components/academics/Academics";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <main>
      <Home />
      <Nav />
      <About />
      <Experiences />
      <Projects />
      <Academics />
      <Skills />
      <Footer />
    </main>
  );
}

export default App;
