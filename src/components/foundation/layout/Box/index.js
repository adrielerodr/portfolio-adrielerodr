import styled from 'styled-components';
import propToStyle from '../../../../theme/utils/propToStyle';

const Box = styled.div`
  ${propToStyle('flex')}
  ${propToStyle('width')}
  ${propToStyle('border')}
  ${propToStyle('height')}
  ${propToStyle('padding')}
  ${propToStyle('display')}
  ${propToStyle('flexWrap')}
  ${propToStyle('marginTop')}
  ${propToStyle('alignItems')}
  ${propToStyle('borderRadius')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
`;

export default Box;
