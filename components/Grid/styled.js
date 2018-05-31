import styled from 'styled-components';
import { device } from 'components/Devices';

export const GridBlock = styled.div`
  display: grid;
  @media ${device.laptopL} {
    width: 1200px;
    padding: 0 30px;
    margin: 0 auto;
  }
`