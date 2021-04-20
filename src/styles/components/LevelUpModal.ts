import styled from 'styled-components';

export const Overlay = styled.div`
  background: ${props => props.theme.colors.background} 0.8;
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background: ${props => props.theme.colors.white};
  width: 100%;
  max-width: 400px;
  padding: 2rem 3rem 0;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  text-align: center;
  position: relative;

  header {
    font-size: 8.75rem;
    font-weight: 600;
    color: ${props => props.theme.colors.primary};
    background: url('/icons/levelup.svg') no-repeat center;
    background-size: contain;
  }

  strong {
    font-size: 2.25rem;
    color: ${props => props.theme.colors.title};
  }

  p {
    font-size: 1.25rem;
    color: ${props => props.theme.colors.text};
    margin-top: 0.25rem;
  }

  button {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    background: transparent;
    border: 0;
    font-size: 0px;
  }

  footer {
    a {
      height: 100%;
      
      display: flex;
      align-items: center;
      justify-content: center;
      
      border-top: 1px solid ${props => props.theme.colors.grayLine};
      border-radius: 0 0 5px 5px;
      padding: 1.75rem 0;
      margin: 2rem -3rem 0;
      
      background: ${props => props.theme.colors.white};
      box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.05);
      color: ${props => props.theme.colors.primaryTwitter};
      font-weight: 600;
      font-size: 1.25rem;

      transition: all 0.2s;

      &:hover {
        background: ${props => props.theme.colors.primaryTwitter};
        color: ${props => props.theme.colors.textHighlight};
      }
    }

    svg {
      margin-left: 1rem;
    }
  }
`;