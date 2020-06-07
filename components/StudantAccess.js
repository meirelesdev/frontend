import Link from 'next/link'
import styles from './StudantAccess.module.css'

export default function StudantArea(props){
    return(
        <img src="assets/icon/user.svg"
                id="icon" alt="Acesso a area do aluno" 
                title="Acesso a area do aluno" className={styles.btnAccess}
        />
        )
}