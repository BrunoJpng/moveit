import Link from 'next/link';
import { signOut } from 'next-auth/client';

import { useContext } from 'react';
import { FiHome, FiAward, FiLogOut } from 'react-icons/fi'
import Switch from 'react-switch';

import { ThemeContext } from '../contexts/ThemeContext';

import { SidebarContainer, SidebarContent } from '../styles/components/Sidebar';

export function Sidebar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <SidebarContainer>
      <div>
        <img src="/icons/logo.svg" alt="Move.it" />
        <Switch 
          onChange={toggleTheme}
          checked={theme.title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={theme.colors.primary}
          onColor={theme.colors.primaryDark}
        />
      </div>

      <SidebarContent>
        <Link href="/">
          <a><FiHome size={32} /></a>
        </Link>

        <Link href="/leaderboard">
          <a><FiAward size={32} /></a>
        </Link>
      </SidebarContent>

      <FiLogOut size={32} onClick={() => signOut()} />
    </SidebarContainer>
  );
}