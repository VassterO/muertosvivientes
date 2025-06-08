import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'

function NotFoundPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>Página No Encontrada</p>
      <Link to="/" className={styles.link}>
        Volver al Inicio
      </Link>
    </div>
  )
}

export default NotFoundPage 