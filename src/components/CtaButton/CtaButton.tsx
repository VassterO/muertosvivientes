import styles from './CtaButton.module.css';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

// --- Tipos de las Props ---
interface CtaButtonProps {
  href: string;
  children: React.ReactNode;
  animationVariants?: Variants;
}

/**
 * Componente reutilizable para un botón de llamada a la acción (CTA).
 * Encapsula el estilo y la animación para ser usado en cualquier parte de la aplicación.
 * @param {CtaButtonProps} props - Las propiedades para el botón.
 */
function CtaButton({ href, children, animationVariants }: CtaButtonProps) {
  return (
    <motion.a
      href={href}
      className={styles.ctaButton}
      variants={animationVariants}
    >
      {children}
    </motion.a>
  );
}

export default CtaButton; 