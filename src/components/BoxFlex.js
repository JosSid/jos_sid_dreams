import styled from 'styled-components';
import themes from './themes';
const { primaryColor, secondaryColor } = themes;

const BoxFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.fD === 'column' ? props.fD : 'row')};
  align-items: ${(props) => props.alignItems || 'center'};
  justify-content: ${(props) => props.justifyContent || 'space-around'};
  height: ${(props) => props.h || 100}px;
  width: ${(props) => props.w || 100}px;
  background-color: ${(props) => props.bGC || secondaryColor};
  color: ${(props) => props.color || primaryColor};
`;

export default BoxFlex;
