import TeamMemberCard from '../components/TeamMemberCard/TeamMemberCard';
import styles from './NuestroEquipoPage.module.css';

/**
 * Página "Nuestro Equipo".
 * Muestra los miembros del equipo en una cuadrícula.
 */
function NuestroEquipoPage() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Nuestro Equipo</h1>
      <div className={styles.teamGrid}>
        <TeamMemberCard
          name="Aran"
          role="Fundador"
          imageUrl="https://cdn.discordapp.com/avatars/1023664361727864882/cce5f0b2f4b3d1a11f45fc60ee30526d.webp?size=128"
        />
        {/* Aquí se pueden añadir más miembros del equipo en el futuro */}
      </div>
    </div>
  );
}

export default NuestroEquipoPage; 