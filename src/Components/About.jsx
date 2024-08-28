
import React from "react"
import styled from "styled-components";
import { ArticleRounded, StorageRounded ,AnalyticsRounded} from "@mui/icons-material";
import logo from "../Image/task.png"




const Container = styled.div`
  position: relative;
  background-color: rgba(12, 12, 12, 0.6);
  border-radius: 15px;
  padding: 73px;
  margin-top: 129px;
  z-index: 1;
  
  margin-right: 6%;
  display:flex;
  flex-direction:column

border: px solid #dddd;

box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 1.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

@media screen and (max-width: 750px) {
  
    flex-direction: column;
    align-items: flex-start;
    
  
    // background-color: transparent;
    padding-left: 0;
    padding-right: 0;
  
  }

`;
const FrontEnd = styled.div`

display:flex;
flex-direction:row;
position:relative;
align-items:center;
background: linear-gradient(90deg, #19276d 0%, rgba(25, 55, 109, 0) 100%);
  border-radius: 10px;
  padding: 24px;
&:hover {
  background-size: 200% 100%;
}

`;
const Title = styled.div`
text-transform: uppercase;
letter-spacing: 1.75px;
font-family: "Roboto";
padding:5px;
gap:5px;
font-size:25px;
font-weight:bold;
color:#FFFFFF;

@media screen and (max-width: 758px){
font-size:80%;
}
`;
const Info = styled.div`
font-family: "Roboto";
padding:5px;
gap:50px;
font-size:15px;
font-weight:bold;
color:#FFFFFF;
@media screen and (max-width: 758px){
font-size:80%;
}

`;
const BackEnd = styled.div`
font-family: "Roboto";

display:flex;
flex-direction:row;
position:relative;
align-items:center;
background: linear-gradient(90deg, #19276d 0%, rgba(25, 55, 109, 0) 100%);
  border-radius: 10px;
  padding: 24px;

&:hover {
  background-size: 200% 100%;
}
`;

const DataAnalysis = styled.div`
font-family: "Roboto";
display:flex;
flex-direction:row;
position:relative;
align-items:center;
background: linear-gradient(90deg, #19276d 0%, rgba(25, 55, 109, 0) 100%);
  border-radius: 10px;
  padding: 24px;

&:hover {
  background-size: 200% 100%;
}
`;

const Detailed = styled.div`
font-family: "Roboto";
display:flex;
position:relative;
flex-direction:column;


`;
const AboutMe = styled.div`

font-family: "Roboto";
padding:10px;

gap:10px;
font-size:20px;
font-weight:bold;
color:#FFFFFF;




`;
const Content = styled.div`
display:flex;
flex-direction:column;
padding:5px;
margin:10px;
gap:20px;
@media screen and (max-width: 758px)
{
    flex-direction: column;
  }
`;

const Image = styled.img`
display:flex;
width: 50vh;
height:50vh;
align-items:center;
z-index:2;

@media screen and (max-width: 758px)
  {
    display: none;
  }

`;


const About = () => {
    return (
        <Container id="about">
            <AboutMe>
                <p style={{position: 'absolute',
  top: '0',
  left: '25px'}}>ABOUT</p>
                <Image img src={logo} alt="" />
            </AboutMe>
            <Content>
            <FrontEnd >
                <ArticleRounded style={{color:'#FFFFFF',fontSize: 40}}/>
                <Detailed>
                <Title>
                    

                    Frontend Developer

                </Title>
                <Info>

                    I'm a front-end developer with experience in building responsive
                    and optimized websites.

                </Info>
                </Detailed>

            </FrontEnd>

            <BackEnd >
                <StorageRounded style={{color:'#FFFFFF',fontSize: 40}}/>
                <Detailed>
                <Title>
                Backend Developer

                </Title>
                <Info>
                    I have experience in developing fase and opetmizes back-end system 
                    and APIs.

                </Info>
                </Detailed>

            </BackEnd>
            <DataAnalysis>

            <AnalyticsRounded style={{color:'#FFFFFF',fontSize: 40}}/>
                <Detailed>
                <Title>
                Data Analyisis

                </Title>
                <Info>
                I am a dedicated and detail-oriented Data Analyst with a passion for 
                transforming complex data into actionable insights

                </Info>
                </Detailed>

            </DataAnalysis>


            </Content>
            

        </Container>
    )
}

export default About;