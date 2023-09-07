import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About</div>
        <div className="BigCard">
          <Image
            src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            I am passionate about DevOps culture. To me, building infrastructure is as a whole can be compared to art. Besides of working daily on 
            high traffic platforms I experiment with technology in my free time and follow latest technology news to find ways to satisfy business needs 
            in the simplest way. It means I care about business values, cost efficiency, people, and simplicity of developing infrastructures and systems. 
            Following changing business needs, maintenance in short 
            and long term condition, independency from third party companies and ensure whole team develop solutions which people 
            really need. My main goal in work is to deliver high-quality and reliable systems.
            Daily basis is constantly improving both on-premise and cloud infrastructures, collaborating with software development 
            team and testing teams to prepare for releases without downtime. Other responsibilities are incident management, troubleshooting 
            and administrating in Linux environments. I've been working close and developing environments with high-traffic production 
            platforms (up to 1mln users) specifically in the online television and streaming industry.
          </div>
          <div className="AboutBio tagline2">
            Below my technology stack, tools and software which I am proficient in:
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
