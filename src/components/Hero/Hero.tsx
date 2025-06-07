import styles from './Hero.module.css';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import CtaButton from '../CtaButton/CtaButton';

// --- Variantes de Animación para Framer Motion ---

/**
 * Define la animación del contenedor principal.
 * `staggerChildren` crea un efecto de cascada para los elementos hijos.
 */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

/**
 * Define la animación para cada elemento hijo (título, subtítulo, botón).
 * Aparecen con un ligero desplazamiento hacia arriba.
 */
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

/**
 * Componente Hero (sección principal).
 * Muestra el mensaje de bienvenida principal y la llamada a la acción.
 * Orquesta una animación de entrada para sus elementos.
 */
function Hero() {
  return (
    <motion.div
      className={styles.hero}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className={styles.title} variants={itemVariants}>
        Un servidor que aspira a prosperar
      </motion.h1>
      <motion.p className={styles.subtitle} variants={itemVariants}>
        Unete ahora y diviertete!
      </motion.p>
      <CtaButton
        href="https://discord.gg/zfmujNpbS9"
        animationVariants={itemVariants}
      >
        Unete al Discord
      </CtaButton>
    </motion.div>
  );
}

export default Hero; 