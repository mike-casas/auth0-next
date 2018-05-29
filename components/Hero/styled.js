import styled from 'styled-components';
import { colors } from '@auth0/cosmos-tokens';

export const HeroWrapper = styled.section`
  padding: 80px 0;
  background-color: ${colors.base.default};
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: 500;
  line-height: 37px;
  margin-bottom: 20px;
  text-align: center;
`;

export const Subtitle = styled.h1`
  max-width: 580px;
  font-size: 14px;
  margin: auto;
  margin-top: 10px;
  color: hsla(0,0%,100%,.8);
  text-align: center;
`;