import Link from 'next/link';
import styles from '../styles/components/Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebarContainer}>
      <img src="/icons/logo.svg" alt="Move.it" />

      <main>
        <Link href="/">
          <a><img src="/icons/home.svg" alt="Home" /></a>
        </Link>

        <Link href="/leaderboard">
          <a><img src="/icons/award.svg" alt="Ranking" /></a>
        </Link>
      </main>

      <div></div>
    </aside>
  );
}