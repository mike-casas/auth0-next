import styled from 'styled-components';
import { device } from 'components/Devices';

export const SectionBlock = styled.section`
  padding: 40px 0;
  @media ${device.laptopL} {
    padding: 80px 0;
  }
`;
