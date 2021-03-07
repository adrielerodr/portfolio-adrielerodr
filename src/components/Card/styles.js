import styled, { css } from 'styled-components';
import Image from 'next/image';
import breakpointsMedia from '../../theme/utils/breackpointsMedia';

const CardWrapper = styled.div`
  border: 1px solid white;
  font-family: 'Rubik', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 2px;
`;

CardWrapper.CardImage = styled(Image)`
  padding: 0;
`;

CardWrapper.HighlightedCardImage = styled.img`
  object-fit: cover;
  position: relative;
  padding: 0;
  width: 393px;
  height: 220px;

  ${breakpointsMedia({
    xs: css`
      width: 187px;
      height: 290px;
    `,
    md: css`
      width: 393px;
      height: 220px;
  `,
  })}
`;

CardWrapper.CardTitle = styled.h5`
 color: white;
`;

CardWrapper.CardText = styled.div`
  color: white;
  margin: 0 16px;
`;

CardWrapper.CardFlag = styled.h6`
  top: 10px;
  left: 0;
  width: 100%;
  margin: 0 auto;
  width: 300px;
  height: 50px;
  color: white;
`;

export default CardWrapper;
