import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  
  background: linear-gradient(90deg, ${props => props.theme.colors.white} 0%, rgba(255, 255, 255, 0) 100%);
  filter: drop-shadow(0px 0px 60px rgba(0, 0, 0, 0.05));
  color: ${props => props.theme.colors.primary};

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  svg {
    opacity: 0.5;
    
    &:hover {
      cursor: pointer;
      opacity: 1;
    }
  }
  
  @media(min-width: 1200px) {
    height: 100%;
    width: auto;
    flex-direction: column;
    background: linear-gradient(180deg, ${props => props.theme.colors.white} 0%, rgba(255, 255, 255, 0) 100%);
    
    > div {
      flex-direction: column;

      img {
        margin-bottom: 1rem;
      }
    }
  }
`;

export const SidebarContent = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a + a {
    margin-left: 2.5rem;
  }

  @media(min-width: 1200px) {
    flex-direction: column;

    a + a {
      margin-left: 0;
      margin-top: 2.5rem;
    }
  }
`;