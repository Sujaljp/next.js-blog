import styles from '../styles/home.module.css'
import '../styles/global.css'
import Link from 'next/link'

export default function Home() {
  return <div className={styles.home}>
    <div><h1>Hi, my name is Sujal Patil!</h1></div>
    <div>
      <Link href="/blog">Check out my Blog</Link>
    </div>
    <div><Link href="/contact">Contact me</Link></div>
  </div>
}
