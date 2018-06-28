import styled from 'styled-components';
import { colors } from '@auth0/cosmos-tokens';

export const HeroWrapper = styled.section`
  padding: 80px 0;
  background-color: ${colors.base.default};
  &::after, &::before {
    content: " ";
    display: table;
  }
`;

export const HeroRow = styled.div`
  margin-left: -15px;
  margin-right: -15px;
  display: block;
  color: #fff;
  text-align: center;
  &::after, &::before {
    content: " ";
    display: table;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: 500;
  line-height: 37px;
  margin-bottom: 20px;
  text-align: center;
`;

export const Logo = styled.h2`
  position: relative;
  background-color: #fff;
  border-radius: 50%;
  margin-right: auto;
  margin-left: auto;
  width: 100px;
  height: 100px;
  & > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Subtitle = styled.h1`
  max-width: 580px;
  font-size: 14px;
  margin: auto;
  margin-top: 10px;
  color: hsla(0,0%,100%,.8);
  text-align: center;
`;

export const Mailto = styled.a`
  color: #44c7f4;
  text-decoration: none;
`