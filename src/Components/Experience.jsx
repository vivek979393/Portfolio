import React from "react"
import styled from "styled-components";
import Skills from "../Data/Skills.json";




const Skills1 = styled.div`
  
  diaplay:flex;
  flex-direction:column;
  margin-top: 79px;
  margin-left: 10%;
  margin-right: 10%;
  

`;
const Exp = styled.div`
position:relative;
flex-direction:column;
font-family: "Roboto";
text-transform: uppercase;
  padding:15px 25px;

  gap:10px;
  font-size:20px;
  font-weight:bold;
  color:#FFFFFF;
  @media screen and (max-width: 768px) {
  
    flex-direction: column;
    align-items: center;
    gap: 34px;
    flex-wrap:wrap;
  }



`;
const TeckStack = styled.div`
  display:flex;
  flex-wrap:wrap;
  
  

`;
const Orginization = styled.div``;
const Skill1 = styled.div`
 gap:30px;
 padding:20px;
 align-items:center;
 @media screen and (max-width: 768px) {
    width:100%
    flex-direction: row;
    justify-content:center;
    gap:34px;
    
  }

`;
const SkillImage = styled.img`
 position:relative;
  height:100px;
  width:100px;
  z-index:2;
  border-radius:20% ;
  padding:20px 20px;
  background: linear-gradient(90deg, #19276d 0%, rgba(25, 55, 109, 0) 100%);
  @media screen and (max-width: 768px) {
     height:50px;
    width:50px;
    
  }
  &:hover {
  background-size: 200% 100%;
  
}
  

`;

const P = styled.div`
position:relative;
flex-direction:column;
font-family: "Roboto";

  padding:10px;

  gap:10px;
  font-size:15px;
  font-weight:bold;
  color:#FFFFFF;



`;


const Experience = () => {

    return (





        <Exp id="experience">
            Skills
            <Skills1>
                
                <TeckStack>
                    {Skills.map((skill, id) => {
                        return (
                            <Skill1>

                                <SkillImage key={id} img src={require(`../Image/${skill.image}`)} alt={skill.name} />
                                    

                                
                                <P>{skill.name}</P>

                            </Skill1>
                        );
              
                
                    }
        )}

                </TeckStack>

            </Skills1>
            <Orginization>

            </Orginization>
        </Exp>


    )
}

export default Experience;