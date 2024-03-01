import React from 'react'
import { SkillsStyle, AditionalInfo, Tools, NoBulletsList, H2, SeparatorLine, DivSkills, Lenguage, ProgramingTools, Stack} from './skills.style';

export const Skills = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

    return (
      <DivSkills className={mounted ? 'DivSkills show' : 'DivSkills'}>
        <AditionalInfo>
            <SkillsStyle>
              <Stack>
                <H2>Stack</H2>
                <NoBulletsList>
                  <li>Javascript</li>
                  <li>Java</li>
                  <li>Python</li>
                  <li>SQL</li>
                </NoBulletsList>
                </Stack>
                <Tools>
                <H2>Frameworks</H2>
                  <NoBulletsList>
                    <li>React</li>
                    <li>Spring</li>
                    <li>Hibernate</li>
                  </NoBulletsList>
                </Tools>
                <Tools>
                <H2>Tools</H2>
                  <NoBulletsList>
                    <li>Git</li>
                    <li>Linux</li>
                    <li>AWS</li>
                    <li>SQL</li>
                  </NoBulletsList>
                </Tools>
                <Lenguage>
                  <H2>Languages</H2>
                  <NoBulletsList>
                  <li>Spanish</li>
                  <li>English</li>
                  </NoBulletsList >
                </Lenguage>
              </SkillsStyle>
              <ProgramingTools>
                
                
              </ProgramingTools>
        </AditionalInfo>
      </DivSkills>
    );
  }

export default Skills