import styles from './Header.module.css'
import Head from 'next/head'
import Link from 'next/link' 
import Logo from './Logo'
import Nav from './Nav'
import StudantArea from './StudantAccess'


export default function header(props){
    return (
        <>
        <Head />
        <header className={`${props.Aclasse?props.Aclasse:styles.headerAll}`}>
            <Logo />
            <Nav />
            <StudantArea />
        </header>
        </>
    )
}