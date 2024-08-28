import React from "react"
import styled from "styled-components";
import data from "../Data/project.json";
import logo from "../Image/update.png";
import Phishing from "../Image/Phishing.jpeg"



const Section=styled.div`
display:flex;
font-size: 20px;
  font-weight: 700;
  margin-bottom: 33px;
  font-family: "Roboto";
  color:#FFFFFF;
  gap:10px;
  
  flex-wrap:wrap;

  
  
 
`;
const Container=styled.div`

display:flex;


margin-right:10%;
gap:30px;
padding:10px 40px;
flex-wrap: wrap;

 `;

const MM=styled.div`

`;
 
const Projects=styled.div`
display:flex;
position:relative;
flex-direction:column;
align-items:center;
justify-content:center;
top:10px;
padding:10px;
flex-wrap: wrap;
max-width: 350px;


  font-weight: 700;
  margin-left: 33px;
  margin-bottom: 33px;
  font-family: "Roboto";
  border:px solid;
  border-radius:2%;

  gap:20px;

  background: linear-gradient(90deg, #19276d 0%, rgba(25, 55, 109, 0) 90%);
  &:hover {
  background-size: 200% 100%;
 
`;
const Title=styled.div`
font-size: 20px;
`;
const Description=styled.div`
font-size: 13px;

`;
const Image=styled.img`
height:20vh;
width:20vh;
border-radius:10%;
padding:30px 50px;
border:1px solid;
`;
const Skill=styled.div`
display:flex;
flex-direction:row;
position:relative;
gap:50px;
font-size: 1rem;


`;
const Sourcecode=styled.div`
display:flex;
border-radius:100px;
border:px solid;
background: linear-gradient(190deg, #19259d 0%, rgba(25, 0, 0, 0) 100%);
font-size: 1.2rem;
padding: 4px 10px;
font-weight: 600;
box-shadow: 2px 4px 8px rgba(0, 0, 0.2, 0.8);
  transition: background-color 0.3s, transform 0.3s;
  &:hover {
  background-size: 200% 100%;
}

`;
const Item=styled.div`
display:flex;
position:relative;
justify-content:space-between;
border-radius:100px;
padding:2px 7px;
background:#253529;
`;


const Project=()=>{

    return (
    <Section id='project'>
        <p style={{position:'relative',top:'0px',left:'25px'}}>PROJECTS</p>

        <Container>
        {data.map((Data,id)=>{

return (
    <MM>
        <Projects Key={id}>
        
        <Image img src={logo}/>

       <Title>
       {Data.name}
       </Title>
        <Description>
            {Data.Description}
        </Description>
        <Skill>
            {
                Data.skills.map((skill,ids)=>{
                    return(
                        <Item key={ids}>
                            {skill}

                        </Item>
                    )
                })
            }
        </Skill>
        <Sourcecode>
          <a href={Data.sourcecode} style={{ textDecoration: "none",fontsize:'1px',color:'#FFFFFF'}}>Source</a>
        </Sourcecode>

</Projects>
    </MM>
)


})}
        </Container>
        
    </Section>
    )
}

export default Project;