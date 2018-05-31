import React from 'react';
import { SectionBlock } from './styled';

const Section = ({ children }) => {
  return (
    <SectionBlock>
      {children}
    </SectionBlock>
  );
};

export default Section;