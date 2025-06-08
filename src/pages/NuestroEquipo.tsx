import TeamMemberCard from '../components/TeamMemberCard/TeamMemberCard';
import styles from './NuestroEquipo.module.css';
import { teamMembers, type TeamMember } from '../data/teamMembers.ts';

/**
 * Página "Nuestro Equipo".
 * Muestra los miembros del equipo en una cuadrícula.
 */
function NuestroEquipoPage() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Nuestro Equipo</h1>
      <div className={styles.teamGrid}>
        {teamMembers.map((member: TeamMember) => (
          <TeamMemberCard
            key={member.name}
            name={member.name}
            role={member.role}
            imageUrl={member.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default NuestroEquipoPage; 