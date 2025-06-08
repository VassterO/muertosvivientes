import styles from './StoreItemCard.module.css';
import CtaButton from '../CtaButton/CtaButton';
import { motion } from 'framer-motion';

// --- Tipos de las Props ---
interface StoreItemCardProps {
  imageUrl: string;
  name: string;
  price: string;
}

/**
 * Tarjeta para mostrar un artículo de la tienda.
 * @param {StoreItemCardProps} props - Las propiedades para la tarjeta del artículo.
 */
function StoreItemCard({ imageUrl, name, price }: StoreItemCardProps) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <img src={imageUrl} alt={`Imagen de ${name}`} className={styles.itemImage} />
      <div className={styles.itemInfo}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.price}>{price}</p>
      </div>
      <CtaButton disabled>Comprar</CtaButton>
    </motion.div>
  );
}

export default StoreItemCard; 