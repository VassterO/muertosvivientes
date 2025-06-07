import styles from './Navbar.module.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/**
 * Componente de la barra de navegación.
 * Muestra el logo del sitio y los enlaces de navegación principales.
 * Incluye una animación de entrada desde la parte superior.
 */
function Navbar() {
  return (
    <motion.nav
      className={styles.navbar}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className={styles.logo}>
        <Link to="/">Muertos Vivientes</Link>
      </div>
      <ul className={styles.navLinks}>
        <li><Link to="/equipo">Nuestro Equipo</Link></li>
        <li><Link to="/tienda">Tienda</Link></li>
      </ul>
    </motion.nav>
  );
}

export default Navbar; 