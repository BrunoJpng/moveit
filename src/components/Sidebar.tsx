import Link from 'next/link';
import { signOut } from 'next-auth/client';

import { FiHome, FiAward, FiLogOut } from 'react-icons/fi'

import styles from '../styles/components/Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebarContainer}>
      <img src="/icons/logo.svg" alt="Move.it" />

      <main>
        <Link href="/">
          <a><FiHome size={32} /></a>
        </Link>

        <Link href="/leaderboard">
          <a><FiAward size={32} /></a>
        </Link>
      </main>

      <FiLogOut size={32} onClick={() => signOut()} />
    </aside>
  );
}