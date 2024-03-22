"use client"

import Link from 'next/link'

import styles from './navbar.module.css';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';


const links = [
   { id: 1, title: 'Home', href: '/' },
   { id: 2, title: 'Portfolio', href: '/portfolio' },
   { id: 3, title: 'Blog', href: '/blog' },
   { id: 4, title: 'About', href: '/about' },
   { id: 5, title: 'Contact', href: '/contact' },
   { id: 6, title: 'Dashboard', href: '/dashboard' },
]



const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Next Blog</Link>
      <div className={styles.links}>
         <DarkModeToggle />
         {links.map((link) => (
            <Link key={link.id} href={link.href} className={styles.link}>
               {link.title}
            </Link>
         ))}
         <button 
            className={styles.logout}
            onClick={() => {console.log("Logged out")}}
         >
            Logout
         </button>
      </div>
    </div>
  )
}

export default Navbar