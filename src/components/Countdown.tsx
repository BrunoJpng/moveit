import { useContext, useState } from 'react';
import { IoMdClose } from 'react-icons/io';

import { CountdownContext } from '../contexts/CountdownContext';

import { 
  CountdownContainer, 
  CountdownButton,
  TimeProgressBar
} from '../styles/components/Countdown';

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  const time = minutes * 60 + seconds;
  const [totalTime] = useState(time);
  const countdownProgressWidth = 100 - Math.round(time * 100) / totalTime;

  return (
    <>
      <CountdownContainer>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </CountdownContainer>

      { hasFinished ? (
        <CountdownButton disabled>
          Ciclo encerrado
          <img src="/icons/check.svg" alt="Encerrado"/>
        </CountdownButton>
      ) : (
          <>
            { isActive ? (
              <>
                <CountdownButton
                  isActive={true}
                  type="button"
                  onClick={resetCountdown}
                >
                  Abandonar ciclo
                  <IoMdClose size={24} />
                </CountdownButton>
                <TimeProgressBar>
                  <div style={{ width: `${countdownProgressWidth}%` }} />
                </TimeProgressBar>
              </>
            ) : (
              <CountdownButton
              type="button"
              onClick={startCountdown}
              >
                Iniciar um ciclo
                <img src="/icons/play.svg" alt="Iniciar"/>
              </CountdownButton>
            )}
          </>
        )}
    </>
  );
}