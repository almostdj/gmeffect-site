import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { SECTIONS } from "./sections/sections";

/**
 * Application shell: the persistent navigation plus the ordered stack of
 * full-screen sections (Home → About → Web Extensions → Contact).
 */
function App() {
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
