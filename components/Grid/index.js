import React from 'react';
import { GridBlock } from './styled';

const Grid = ({ children }) => {
  return (
    <GridBlock>
      {children}
    </GridBlock>
  );
};

export default Grid;