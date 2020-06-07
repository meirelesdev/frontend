import Link from 'next/link'
import styles from './Nav.module.css'

export default function Nav(props){
    return(
        <nav className={styles.menu}>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/sobrenos">
                <a>Sobre nós</a>
            </Link>
            <Link href="/gallery">
                <a>Galeria</a>
            </Link>
            <Link href="/planos">
                <a>Planos</a>
            </Link>
            <Link href="/blog">
                <a>Blog</a>
            </Link>
            <Link href="/contact">
                <a>Contato</a>
            </Link>
        </nav>
    )
}