import React from "react"
import styled from "styled-components";
import logo from "../Image/profile.jpg"
import { EmailRounded, DownloadRounded } from "@mui/icons-material";
import { Link } from 'react-router-dom';
import Vivek from "../resume/Vivek.pdf"
import Typewriter from 'typewriter-effect';


const Section = styled.div`
position: relative;
 display:flex;
 flex-direction:row;
 justify-content: space-between;
 align-items:center;
 border:px solid;
 
 background: linear-gradient(80deg, #14255b 0%, rgba(25, 55, 109, 0) 100% ,rgba(55, 255, 155, 0) 140%,rgba(2, 25, 24, 0) 140%);
 
 @media screen and (max-width: 758px) {
  
    flex-direction: column-reverse;
    align-items:center;
    position :relative;
    background:none;
    
    
  }

margin-top:10%;
margin-right:10%

`;
const Details = styled.div`
display:flex;
width:80%;
left:10px;
align-items:center;
flex-direction:column;
padding:20px;

 @media screen and (max-width: 758px) {
  
    align-items:center;
    
    
    
  }
`;

const Info = styled.div`
font-size: 20px;
  font-family: cursive;
  margin-bottom: 10px;
  margin-Left: 10%;
  align-items:center;
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 1) 100%,
    rgba(255, 255, 255, 0) 140%
  );
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
   @media screen and (max-width: 758px) {
  
    align-items:center;
    font-size:80%
    padding:0px 10px;
    
  }
`;
const Image = styled.img`
display:flex;
width:400px;
align-items:center;
height:400px;
border-radius:50%;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
z-index: 1;
@media screen and (max-width: 758px) {
     
     margin-top:10%;


    width:300px;
    height:300px;
    align-items:center;
  }

`;
const Name = styled.div`
font-size: 40px;
color:white;
font-weight: 700;
margin-bottom: 2px;
font-family: "Roboto";
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 1) 100%,
    rgba(255, 255, 255, 0) 140%
  );
  
  -webkit-background-clip: text;
  @media screen and (max-width: 758px) {
  
    align-items:center;
    font-size:110%
    top:5%
    
  }
`;

const P = styled.div`
font-size: 30px;
font-weight: 900;
color:Yellow;

`;

const Email = styled.div`

display:flex;
flex-Direction:row;
gap:10px;

`;

const Resume = styled.div`
font-family: "Roboto";
font-size: 1.5rem;
border-radius: 100px;
position:relative;
background: linear-gradient(90deg, #19256d 0%, rgba(25, 55, 109, 0) 100%);
font-weight: 600;
border:px solid;
padding: 8px 20px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, transform 0.3s;
  &:hover {
  background-size: 200% 100%;
}


`
  ;


const Cont = styled.div`
// background-color: #19276d;
font-family: "Roboto";
font-size: 1.5rem;
border-radius: 100px;

font-weight: 600;
border:px solid;
padding: 8px 20px;
background: linear-gradient(90deg, #19276d 0%, rgba(25, 55, 109, 0) 100%);
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, transform 0.3s;
  &:hover {
  background-size: 200% 100%;
}

  
  `;




const Hero = () => {
  return (
    <Section id='Hero'>
      <Details>
        <Name>
          I'm ,Vivek Shukla.
          <P>
          <Typewriter 
            options={{
              strings: ['Engineer', 'Developer','Analyst'],
              autoStart: true,
              loop: true,
            }}
          />
          </P>
        </Name>
        <Info>
          <p>Passionate and results-driven Web Developer with  experience
            in designing, developing, and maintaining dynamic and responsive
            websites and web applications. Proficient in both front-end and
            back-end technologies, with a strong foundation in user-centered
            design principles and modern development practices.</p>

        </Info>
        <Email >
          <Cont>
            <EmailRounded style={{ textDecoration: "none", fontsize: '1px', color: '#FFFFFF' }} />
            <a href="mailto:vivekshukla979393@gmail.com" style={{ textDecoration: "none", fontsize: '1px', color: '#FFFFFF' }} > Contact</a>
          </Cont>
          <Resume>

            <DownloadRounded style={{ textDecoration: "none", fontsize: '1px', color: '#FFFFFF' }} />
            <a href="/Vivek.pdf" download="Vivek_resume" target="_blank" rel="noreferrer" style={{ textDecoration: "none", fontsize: '1px', color: '#FFFFFF' }} >Resume</a>


          </Resume>

        </Email>
      </Details>

      <Image img src={logo} alt="" />




      <topBlur></topBlur>
      <bottomBlur>

      </bottomBlur>
    </Section>
  )
}

export default Hero;