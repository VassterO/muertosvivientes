import styles from './Layout.module.css'
import Navbar from '../Navbar/Navbar.tsx'
import Footer from '../Footer/Footer.tsx'
import BackgroundAnimation from '../BackgroundAnimation/BackgroundAnimation.tsx'
import { type ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <BackgroundAnimation />
      <div className={styles.container}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout 