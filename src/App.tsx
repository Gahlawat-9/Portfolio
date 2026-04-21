import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Projects from "./components/Projects";
import Toolkit from "./components/Toolkit";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-surface selection:bg-primary-container selection:text-on-primary-container">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Story />
        <Toolkit />
      </main>
      <Footer />
    </div>
  );
}
