import styles from './CtaButton.module.css';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { MouseEvent } from 'react';

// --- Tipos de las Props ---
interface CtaButtonProps {
  href?: string;
  children: React.ReactNode;
  animationVariants?: Variants;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

/**
 * Componente reutilizable para un botón de llamada a la acción (CTA).
 * Encapsula el estilo y la animación para ser usado en cualquier parte de la aplicación.
 * Renderiza un enlace si se proporciona `href`, de lo contrario, un botón.
 * @param {CtaButtonProps} props - Las propiedades para el botón.
 */
function CtaButton({
  href,
  children,
  animationVariants,
  onClick,
  disabled,
}: CtaButtonProps) {
  if (href) {
    return (
      <motion.a
        href={href}
        className={styles.ctaButton}
        variants={animationVariants}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={styles.ctaButton}
      variants={animationVariants}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}

export default CtaButton; 