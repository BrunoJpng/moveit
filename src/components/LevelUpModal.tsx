import { useContext } from 'react';
import { FaTwitter } from 'react-icons/fa';

import { ChallengesContext } from '../contexts/ChallengesContext';

import { Overlay, Container } from '../styles/components/LevelUpModal';

export function LevelUpModal() {
  const { 
    level, 
    totalExperience, 
    challengesCompleted, 
    closeLevelUpModal 
  } = useContext(ChallengesContext);

  const thumbnailUrl = `${process.env.PUBLIC_NEXTAUTH_URL}/api/thumbnail.png?level=${level}&totalExperience=${totalExperience}&challengesCompleted=${challengesCompleted}`;

  return (
    <Overlay>
      <Container>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>

        <footer>
          <a 
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(thumbnailUrl)}`}
            target="_blank" 
            rel="nofollow"
          >
            Compartilhar no Twitter 
            <FaTwitter size={24} />
          </a>
        </footer>
      </Container>
    </Overlay>
  );
}