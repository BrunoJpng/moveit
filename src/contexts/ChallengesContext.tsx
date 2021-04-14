import { createContext, useState, ReactNode, useEffect } from 'react';
import { useSession } from 'next-auth/client';

import axios from 'axios';

import { LevelUpModal } from '../components/LevelUpModal';

import challenges from '../../challenges.json';

interface Challenge {
  type: 'body' | 'eye',
  description: string,
  amount: number
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  totalExperience: number;
  experienceToNextLevel: number;
  activeChallenge: Challenge;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  closeLevelUpModal: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  totalExperience: number;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({
  children,
  ...rest
}: ChallengesProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
  const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);
  const [totalExperience, setTotalExperience] = useState(rest.totalExperience ?? 0);
  const [activeChallenge, setActiveChallenge] = useState(null);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  const [session] = useSession();

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);
  const accessToken = session?.accessToken;

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio 🎉', {
        body: `Valendo ${challenge.amount} xp!`
      });
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  async function completeChallenge() {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;
    let isLevelUpdated: boolean;
    
    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
      isLevelUpdated = true;
    }

    setTotalExperience(totalExperience + amount);
    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
    
    await axios.put('/api/completeChallenge', {
      level: isLevelUpdated ? level + 1 : level,
      challengesCompleted: challengesCompleted + 1,
      currentExperience: finalExperience,
      totalExperience: totalExperience + amount,
      accessToken,
    });
  }

  return (
    <ChallengesContext.Provider value={{
      level,
      currentExperience,
      challengesCompleted,
      totalExperience,
      experienceToNextLevel,
      levelUp,
      startNewChallenge,
      activeChallenge,
      resetChallenge,
      completeChallenge,
      closeLevelUpModal
    }}>
      {children}

      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  );
}