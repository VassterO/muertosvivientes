import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import NuestroEquipoPage from './pages/NuestroEquipo';
import TiendaPage from './pages/Tienda';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import BackgroundAnimation from './components/BackgroundAnimation/BackgroundAnimation';
import styles from './pages/Home.module.css'; // Reutilizamos el contenedor

/**
 * Componente principal de la aplicación.
 * Es el punto de entrada que renderiza la página principal.
 */
function App() {
  return (
    <>
      <BackgroundAnimation />
      <div className={styles.container}>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/equipo" element={<NuestroEquipoPage />} />
            <Route path="/tienda" element={<TiendaPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
