import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { useInitialHashScroll } from "./hooks/useInitialHashScroll";
import { SECTIONS } from "./sections/sections";

/**
 * Application shell: the persistent navigation plus the ordered stack of
 * full-screen sections (Home → About → Web Extensions → Support me → Contact).
 */
function App() {
  // Honour deep links like /#contact once the sections have rendered.
  useInitialHashScroll();

  return (
    <>
      <Navbar />
      <main>
        {SECTIONS.map(({ id, Component }) => (
          <Component key={id} />
        ))}
      </main>
      <Footer />
    </>
  );
}

export default App;
