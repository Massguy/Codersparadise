import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg_2.svg'
import Icon3 from '../../images/svg_4.svg'
import {TutorialsContainer,TutorialsCard,TutorialsWrapper,TutorialsH1,TutorialsH2,TutorialsIcon,TutorialsP} from '../Tutorials/TutorialElements';
const Tutorials = () => {
    return (
        <TutorialsContainer id="classes">
            <TutorialsH1>
                Our Main Tutorial topics
            </TutorialsH1>
            <TutorialsWrapper>
                <TutorialsCard>
                    <TutorialsIcon src={Icon1} />
                    <TutorialsH2>Javascript</TutorialsH2>
                    <TutorialsP>Get the best Javascript lessons</TutorialsP>
                </TutorialsCard>
                <TutorialsCard>
                    <TutorialsIcon src={Icon2} />
                    <TutorialsH2>React</TutorialsH2>
                    <TutorialsP>Get the best React lessons</TutorialsP>
                </TutorialsCard>
                <TutorialsCard>
                    <TutorialsIcon src={Icon3} />
                    <TutorialsH2>NodeJs</TutorialsH2>
                    <TutorialsP>Get the best NodeJs lessons</TutorialsP>
                </TutorialsCard>
            </TutorialsWrapper>
        </TutorialsContainer>
    )
}

export default Tutorials

