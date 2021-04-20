import { Container, UserContainer } from '../styles/components/UserItem';

interface UserItemProps {
  position: number;
  name: string;
  image: string;
  level: number;
  challengesCompleted: number;
  totalExperience: number;
}

export function UserItem(props: UserItemProps) {
  return (
    <Container>
      <td>{props.position + 1}</td>

      <UserContainer>
        <img src={props.image} alt={props.name} />

        <div>
          <strong>{props.name}</strong>
          <p>
            <img src="icons/level.svg" alt="Level" />
            {props.level}
          </p>
        </div>
      </UserContainer>

      <td>
        <span>{props.challengesCompleted} </span>
        <span>completados</span>
      </td>

      <td>
        <span>{props.totalExperience} </span>
        <span>xp</span>
      </td>
    </Container>
  );
}