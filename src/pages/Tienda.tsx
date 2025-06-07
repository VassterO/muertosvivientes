import StoreItemCard from '../components/StoreItemCard/StoreItemCard';
import styles from './Tienda.module.css';

const storeItems = [
  {
    name: 'Placeholder',
    price: '10.00€',
    imageUrl: 'https://via.placeholder.com/300x200/39ff14/000000?text=VIP',
  },
  {
    name: 'Placeholder',
    price: '5.00€',
    imageUrl: 'https://via.placeholder.com/300x200/39ff14/000000?text=Creditos',
  },
  {
    name: 'Placeholder',
    price: '2.50€',
    imageUrl: 'https://via.placeholder.com/300x200/39ff14/000000?text=Skin',
  },
];

/**
 * Página "Tienda".
 * Muestra los artículos de la tienda en una cuadrícula.
 */
function TiendaPage() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Tienda</h1>
      <div className={styles.storeGrid}>
        {storeItems.map((item, index) => (
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