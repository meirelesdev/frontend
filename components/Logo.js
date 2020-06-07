import styles from './Logo.module.css'
import Link from 'next/link'

export default function Logo(props){
    return (        
    <Link href="/">
        <a className={props.Aclasse?props.Aclasse:styles.logo}>
        <img src="assets/logo/fitness.svg"  />
        </a>
    </Link>
    )
}