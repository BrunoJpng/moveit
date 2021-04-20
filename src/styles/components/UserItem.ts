import styled from 'styled-components';

export const Container = styled.tr`
  background: ${props => props.theme.colors.white};
  width: 100%;

  td {
    text-align: center;
    padding: 1rem 1.5rem;

    &:first-child {
      width: 4.5rem;

      font-weight: 500;
      font-size: 1.5rem;
      color: ${props => props.theme.colors.text};
      
      border-radius: 5px 0 0 5px;
      border-right: 5px solid ${props => props.theme.colors.background};
    }
    
    &:last-child {
      border-radius: 0px 5px 5px 0px;
      width: 12rem;
      padding-right: 2rem;
    }

    span {
      font-weight: 500;

      &:first-child {
        color: ${props => props.theme.colors.primary};
      }
    }
  }
`;

export const UserContainer = styled.td`
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;

  > img {
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    margin-right: 1rem;
  }

  div {
    text-align: initial;
    
    strong {
      font-size: 1.25rem;
    }
    
    img {
      margin-right: 0.5rem;
    }
  }

  p {
    display: flex;
    align-items: center;
    margin-top: 0.438rem;
  }
`;