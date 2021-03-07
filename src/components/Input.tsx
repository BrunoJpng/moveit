import { InputHTMLAttributes, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

import styles from '../styles/components/Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  handleSubmit: (value: string) => void;
}

export function Input({ handleSubmit }: InputProps) {
  const [userName, setUserName] = useState('');

  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        placeholder="Digite seu username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />

      {userName.length > 0 ? (
        <button
          className={`${styles.loginButton} ${styles.loginButtonActive}`}
          onClick={() => handleSubmit(userName)}
        >
          <FiArrowRight size={40} />
        </button>
      ) : (
        <button className={styles.loginButton}>
          <FiArrowRight size={40} />
        </button>
      )}
    </div>
  );
}