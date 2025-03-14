import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroBgAnimation from "../HeroBgAnimation";
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from "./HeroStyle";
import HeroImg from "../../images/HeroImage.jpg";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import StarCanvas from "../StarCanvas/StarCanvas";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  return (
    <motion.div
      id="about"
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <HeroContainer>
        <StarCanvas />
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <HeroLeftContainer id="Left">
              <Title>
                Hi, I am <br /> {Bio.name}
              </Title>
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
              <ResumeButton href={Bio.resume} target="display">
                Check Resume
              </ResumeButton>
            </HeroLeftContainer>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            <HeroRightContainer id="Right">
              <Img src={HeroImg} alt="hero-image" />
            </HeroRightContainer>
          </motion.div>
        </HeroInnerContainer>
      </HeroContainer>
    </motion.div>
  );
};

export default HeroSection;
