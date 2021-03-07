import styled from 'styled-components';
import theme from '../../theme';

const CoverComponent = styled.div`
  font-family: 'Rubik', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;

  p {
    border-right: solid 3px ${theme.colors.primary.main.color};
    white-space: nowrap;
    overflow: hidden;    
  }

  /* Animation */
  p {
    animation: animated-text 4s steps(29,end) 1s 1 normal both,
             animated-cursor 600ms steps(29,end) infinite;
  }

  /* text animation */
  @keyframes animated-text {
    from { max-width: 0; }
    to { max-width: 472px; }
  }

  /* cursor animations */
  @keyframes animated-cursor {
    from { border-right-color: ${theme.colors.primary.main.color}; }
    to { border-right-color: transparent; }
  }
`;

export default CoverComponent;
