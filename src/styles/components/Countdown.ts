import styled, { css } from 'styled-components';

interface CountdownButtonProps {
  isActive?: boolean;
}

export const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: ${props => props.theme.colors.title};

  > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }

  > div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: ${props => props.theme.colors.white};
    box-shadow: 0 0 60px rgba(0,0,0,0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;
    
    span {
      flex: 1;

      &:first-child {
        border-right: 1px solid ${props => props.theme.colors.background};
      }

      &:last-child {
        border-left: 1px solid ${props => props.theme.colors.background};
      }
    }
  }
`;

export const CountdownButton = styled.button<CountdownButtonProps>`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.textHighlight};

  font-size: 1.25rem;
  font-weight: 600;

  transition: background-color 0.2s;

  :not(:disabled):hover {
    background: ${props => props.theme.colors.primaryDark};
  }

  :disabled {
    background: ${props => props.theme.colors.white};
    color:${props => props.theme.colors.text};
    border-bottom: 4px solid ${props => props.theme.colors.green};
    cursor: not-allowed;
  }

  img, svg {
    margin-left: 1rem;
  }

  ${({ isActive }: CountdownButtonProps) => 
    isActive && css`
      background: ${props => props.theme.colors.white};
      color: ${props => props.theme.colors.title};   

      :not(:disabled):hover {
        background: ${props => props.theme.colors.red};
        color: ${props => props.theme.colors.textHighlight};
      }
    `
  }
`;

export const TimeProgressBar = styled.div`
  flex: 1;
  height: 4px;
  border-radius: 0 0 5px 5px;
  background: ${props => props.theme.colors.grayLine};
  margin-top: -4px;

  > div {
    height: 4px;
    border-radius: 0 0 5px 5px;
    background: ${props => props.theme.colors.green};
  }
`;