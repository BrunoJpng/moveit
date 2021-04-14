import { useContext, useState } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';


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
  const countdownProgress = 100 - Math.round(time * 100) / totalTime;

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      { hasFinished ? (
        <button
          disabled
          className={styles.countdownButton}
        >
          Ciclo encerrado
          <img src="/icons/check.svg" alt="Encerrado"/>
        </button>
      ) : (
          <>
            { isActive ? (
              <button
                type="button"
                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                onClick={resetCountdown}
              >
                Abandonar ciclo
                <img src="/icons/close.svg" alt="Encerrar"/>
              </button>
            ) : (
                <button
                  type="button"
                  className={styles.countdownButton}
                  onClick={startCountdown}
                >
                  Iniciar um ciclo
                  <img src="/icons/play.svg" alt="Iniciar"/>
                </button>
              )}
          </>
        )}
      <div>
        <div style={{ width: `${countdownProgress}%` }} />
      </div>
    </div>
  );
}