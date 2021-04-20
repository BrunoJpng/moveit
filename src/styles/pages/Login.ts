import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.primary} url('/simbolo.svg') no-repeat left;
  height: 100vh;
  width: 100vw;
  
  display: flex;
  align-items: center;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  > img {
    margin-bottom: 6rem;
  }

  strong {
    color: ${props => props.theme.colors.textHighlight};
    font-weight: 600;
    font-size: 36px;
  }

  @media(min-width: 720px) {
    position: relative;
    left: 15%;
  }
`;

export const Button = styled.button`
  width: 350px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #b3b9ff;
  background: linear-gradient(90deg, #4953B8 0%, rgba(73, 83, 184, 0.2) 100%);

  font-weight: 500;
  font-size: 1.25rem;

  padding: 1rem;
  margin-top: 1.5rem;
  border: 0;
  border-radius: 5px;

  transition: background-color 0.2s;

  &:hover {
    background: ${props => props.theme.colors.green};
    color: ${props => props.theme.colors.textHighlight};
  }
`;