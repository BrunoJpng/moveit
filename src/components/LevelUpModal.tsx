import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal() {
  const { 
    level, 
    currentExperience, 
    challengesCompleted, 
    closeLevelUpModal 
  } = useContext(ChallengesContext);

  const thumbnailUrl = encodeURIComponent(`
    http://localhost:3000/api/thumbnail.png?level=${level}&currentExperience=${currentExperience}&challengesCompleted=${challengesCompleted}
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
            <img src="/icons/twitter.svg" alt="Twitter"/>
          </a>
        </footer>
      </div>
    </div>
  );
}