import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 90%;
  max-width: 992px;
  margin: 6.25rem auto 0;
  padding-top: 2.5rem;

  display: flex;
  flex-direction: column;

  aside main a:last-child {
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
  

  strong {
    font-weight: 600;
    font-size: 2.25rem;
    color: ${props => props.theme.colors.title};
  }

  @media(min-width: 1200px) {
    margin-top: 0;

    aside main a:last-child::before {
      width: 0.25rem;
      height: 3.5rem;
      left: 0;
      top: auto;
      border-radius: 0 5px 5px 0;
    }
  }
`;

export const Table = styled.table`
  margin-top: 2.5rem;
  border-spacing: 0 8px;

  tr th {
    font-weight: 700;
    font-size: 0.875rem;
    text-transform: uppercase;
    text-align: initial;
    opacity: 0.5;
    padding: 0 0 1rem 1.5rem;

    :first-child {
      padding-left: 0;
    }

    :last-child {
      text-align: center;
      padding-left: 0;
    }
  }
`;