import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import NuestroEquipoPage from './pages/NuestroEquipo';
import TiendaPage from './pages/Tienda';
import Layout from './components/Layout/Layout';
import NotFoundPage from './pages/NotFound';
import { ROUTES } from './constants/routes';

/**
 * Componente principal de la aplicación.
 * Es el punto de entrada que renderiza la página principal.
 */
function App() {
  return (
    <Layout>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.EQUIPO} element={<NuestroEquipoPage />} />
        <Route path={ROUTES.TIENDA} element={<TiendaPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
