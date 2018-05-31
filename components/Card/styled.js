import styled from 'styled-components';

export const CardWrapper = styled.li`
  position: relative;
  padding: 80px 15px;
  border: 1px solid rgba(0,0,0,.1);
  text-align: center;
  background-color: #fff;
  border-radius: 3px;

  &:first-child {
    grid-column: col / span 3;
    grid-row: row ;
  }
`;

export const CardDate = styled.time`
  display: block;
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 25px;
  letter-spacing: .88px;
  color: rgba(0,0,0,.54);
  text-transform: uppercase;
`;

export const CardTitle = styled.h2`
  margin: 0 0 30px;
  font-size: 24px;
  font-weight: 500;
  color: rgba(0,0,0,.87);
  line-height: 32px;
`;