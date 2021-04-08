import styles from '../styles/components/UserItem.module.css';

interface UserItemProps {
  position: number;
  name: string;
  image: string;
  level: number;
  completedChallenges: number;
  currentExperience: number;
}

export function UserItem(props: UserItemProps) {
  return (
    <tr className={styles.userItemContainer}>
      <td className={styles.positionContainer}>{props.position + 1}</td>

      <td className={styles.userInfoContainer}>
        <img src={props.image} alt={props.name} />

        <div>
          <strong>{props.name}</strong>
          <p>
            <img src="icons/level.svg" alt="Level" />
            {props.level}
          </p>
        </div>
      </td>

      <td>
        <span>{props.completedChallenges} </span>
        <span>completados</span>
      </td>

      <td>
        <span>{props.currentExperience} </span>
        <span>xp</span>
      </td>
    </tr>
  );
}