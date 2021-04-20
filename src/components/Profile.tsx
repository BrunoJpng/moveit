import { useSession } from 'next-auth/client';
import { useContext } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext';

import { ProfileContainer } from '../styles/components/Profile';

export function Profile() {
  const { level } = useContext(ChallengesContext);
  const [session] = useSession();
  
  return (
    <ProfileContainer>
      <img src={session?.user.image} alt={session?.user.name} />

      <div>
        <strong>{session?.user.name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          {level}
        </p>
      </div>
    </ProfileContainer>
  );
}