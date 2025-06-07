import styles from './TeamMemberCard.module.css';
import { motion } from 'framer-motion';

// --- Tipos de las Props ---
interface TeamMemberCardProps {
  imageUrl: string;
  name: string;
  role: string;
}

/**
 * Tarjeta para mostrar un miembro del equipo.
 * @param {TeamMemberCardProps} props - Las propiedades para la tarjeta.
 */
function TeamMemberCard({ imageUrl, name, role }: TeamMemberCardProps) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <img src={imageUrl} alt={`Foto de ${name}`} className={styles.avatar} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.role}>{role}</p>
    </motion.div>
  );
}

export default TeamMemberCard; 