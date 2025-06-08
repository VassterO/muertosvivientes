import StoreItemCard from '../components/StoreItemCard/StoreItemCard';
import styles from './Tienda.module.css';
import { storeItems, type StoreItem } from '../data/storeItems.ts';

/**
 * Página "Tienda".
 * Muestra los artículos de la tienda en una cuadrícula.
 */
function TiendaPage() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Tienda</h1>
      <div className={styles.storeGrid}>
        {storeItems.map((item: StoreItem, index) => (
          <StoreItemCard
            key={index}
            name={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default TiendaPage; 