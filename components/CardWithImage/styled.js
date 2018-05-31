import styled from 'styled-components';

export const CardWrapper = styled.li`
  position: relative;
  border: 1px solid rgba(0,0,0,.1);
  text-align: center;
  background-color: #fff;
  border-radius: 3px;

  &:first-child {
    grid-column: col / span 3;
    grid-row: row ;
  }
`;

export const CardArticle = styled.article`
  display: flex;
  flex-direction: row;
`;

export const CardFigure = styled.figure`
  position: relative;
  flex: 0 0 300px;
  min-height: 300px;
  background-color: #eee;
`;

export const CardImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-clip: padding-box;
  transform: translate(-50%,-50%);
`;


export const CardDetails = styled.div`
  position: relative;
  flex-direction: row;
  padding: 50px;
  text-align: left;
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