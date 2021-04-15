import { useContext } from 'react';
import { FaTwitter } from 'react-icons/fa';

import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal() {
  const { 
    level, 
    totalExperience, 
    challengesCompleted, 
    closeLevelUpModal 
  } = useContext(ChallengesContext);

  const thumbnailUrl = encodeURIComponent(`
    https://moveit-brunojpng.vercel.app/api/thumbnail.png?level=${level}&totalExperience=${totalExperience}&challengesCompleted=${challengesCompleted}
  `);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>

        <footer>
          <a 
            href={`https://twitter.com/intent/tweet?url=${thumbnailUrl}`}
            target="_blank" 
            rel="nofollow"
          >
            Compartilhar no Twitter 
            <FaTwitter size={24} />
          </a>
        </footer>
      </div>
    </div>
  );
}