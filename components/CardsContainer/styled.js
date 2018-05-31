import styled from 'styled-components';
import { device } from 'components/Devices';

export const CardsContainerWrapper = styled.ul`
  display: grid;
  grid-gap: 20px;
  width: 100%;
  margin: 0 auto;
  color: #444;
  background-color: #fff;

  @media (min-width: 1200px) {
    max-width: 1200px;
    padding: 0 0 30px;
    grid-template-columns: repeat(3, [col] auto ) ;
    grid-template-rows: repeat(2, [row] auto  );
  }
`;