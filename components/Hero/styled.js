import styled from 'styled-components';
import { colors } from '@auth0/cosmos-tokens';
import { device } from 'components/Devices';

export const HeroWrapper = styled.section`
  padding: 80px 0;
  background-color: ${colors.base.default};
`;

export const ImageWrapper = styled.h2`
  position: relative;
  width: 100px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 25px;
  border-radius: 50%;
  background-color: #fff;
`
export const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`
export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: 500;
  line-height: 37px;
  margin-bottom: 20px;
  text-align: center;

  @media ${device.laptopL} {
    font-size: 36px;
    line-height: 49px;
    margin-bottom: 15px;
  }
`;

export const Subtitle = styled.p`
  max-width: 580px;
  font-size: 14px;
  margin: auto;
  margin-top: 10px;
  color: hsla(0,0%,100%,.8);
  text-align: center;
`;