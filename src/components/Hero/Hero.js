import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        My Portfolio
      </SectionTitle>
      <SectionText>
        I am begignner developer aspire to learn trending Technologies.
      </SectionText>
      <Button onClick={()=>window.location="https://www.linkedin.com/in/rishabh-singh-bb721017a/"}>Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;