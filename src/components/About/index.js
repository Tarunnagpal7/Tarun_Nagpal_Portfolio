import React from 'react'
import AboutBgAnimation from '../AboutBgAnimation';
import { AboutContainer, AboutBg, AboutLeftContainer, Img, AboutRightContainer, AboutInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from  './aboutstyle';
import Image from '../../images/Image.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const AboutSection = () => {
    return (
        <div id="about">
            <AboutContainer>
                <AboutBg>
                    <AboutBgAnimation />
                </AboutBg>
                <AboutInnerContainer >
                    <AboutLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display' rel = 'noopener noreferrer'>Check Resume</ResumeButton>
                    </AboutLeftContainer>

                    <AboutRightContainer id="Right">

                        <Img src={Image} alt="About-image" />
                    </AboutRightContainer>
                </AboutInnerContainer>

            </AboutContainer>
        </div>
    )
}

export default AboutSection
