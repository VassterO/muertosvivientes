import StoreItemCard from '../components/StoreItemCard/StoreItemCard';
import styles from './Tienda.module.css';

/**
 * Página "Tienda".
 * Muestra los artículos de la tienda en una cuadrícula.
 */
function Tienda() {
  // Datos de ejemplo para los artículos de la tienda.
  const storeItems = [
    {
      name: 'Paquete de Bienvenida',
      price: '$5.00 USD',
      imageUrl: 'https://via.placeholder.com/400x200.png/1a1a1a/ffffff?text=Paquete',
    },
    {
      name: 'Acceso VIP',
      price: '$15.00 USD',
      imageUrl: 'https://via.placeholder.com/400x200.png/1a1a1a/ffffff?text=VIP',
    },
    {
      name: 'Créditos del Juego',
      price: '$10.00 USD',
      imageUrl: 'https://via.placeholder.com/400x200.png/1a1a1a/ffffff?text=Creditos',
    },
  ];

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Tienda del Servidor</h1>
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

export default Tienda; 