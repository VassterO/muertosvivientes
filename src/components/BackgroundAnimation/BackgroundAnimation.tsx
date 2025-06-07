import styles from './BackgroundAnimation.module.css';

/**
 * Componente para la animación de fondo.
 * Renderiza una serie de elementos <li> que son estilizados y animados
 * por su CSS module correspondiente para crear un efecto de partículas flotantes.
 */
function BackgroundAnimation() {
  return (
    <div className={styles.area}>
      <ul className={styles.circles}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default BackgroundAnimation; 