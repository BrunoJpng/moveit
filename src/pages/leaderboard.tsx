import { Sidebar } from "../components/Sidebar";
import { UserItem } from "../components/UserItem";

import styles from "../styles/pages/Leaderboard.module.css";

export default function Leaderboard() {
  const users = [];
  
  return (
    <div className={styles.leaderboardContainer}>
      <Sidebar />

      <strong>Leaderboard</strong>

      <table>
        <thead>
          <tr>
            <th>Posição</th>
            <th>Usuário</th>
            <th>Desafios</th>
            <th>Experiência</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => {
            console.log(index);

            return (
              <UserItem key={index}
                position={index}
                name={user.name}
                image={user.image}
                level={user.level}
                completedChallenges={user.completedChallenges}
                currentExperience={user.currentExperience}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}