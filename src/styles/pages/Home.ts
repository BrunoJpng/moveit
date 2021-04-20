import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 6.25rem auto 0;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;

  aside main a:first-child {
    svg {
      opacity: 1;
    }
  
    ::before {
      height: 0.25rem;
      width: 3.5rem;
      content: "";
      position: absolute;
      top: 0;
      border-radius: 0 0 5px 5px;
      background: ${props => props.theme.colors.primary};
      cursor: default;
    }
  }

  @media(min-width: 1200px) {
    margin-top: 0;

    aside main a:first-child::before {
      width: 0.25rem;
      height: 3.5rem;
      left: 0;
      top: auto;
      border-radius: 0 5px 5px 0;
    }
  }
`;

export const Section = styled.section`
  flex: 1;

  > div {
    margin: 2rem;
  }

  @media(min-width: 720px) {
    display: grid;
    flex-direction: column;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;

    > div {
      margin: 0;
    }
  }  
`;