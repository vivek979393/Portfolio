
import { EmailRounded} from "@mui/icons-material";
import React from "react"
import styled from "styled-components";
import logo from "../Image/GitHub.png"
import logo1 from "../Image/LinkedIn.png"


const Section=styled.div`
display:flex;
flex-direction:row;
justify-content:space-evenly;
color:#FFFFFF;
padding:10px;
letter-spacing: 1.5px;
background: rgb(25, 55, 109);
    background: linear-gradient(180deg, #19276d 0%, rgba(25, 55, 109, 0) 100%);

@media screen and (max-width: 758px) {
  
    flex-direction: column;
    flex-wrap:wrap;
    align-items: flex-start;
    align-items: center;
  }
`;
const Contacts=styled.div`
padding:5px ;
display:flex;
position:relative;
flex-direction:column;
font-size: 40px;
  font-weight: 700;
  
  font-family: "Roboto";
  color:#FFFFFF;
  gap:5px;
  letter-spacing: 1px;
justify-content:center;
@media screen and (max-width: 750px) {
   
    flex-direction: column;
    align-items: center;
    font-size:20px
  }



`;
const Details=styled.div`
display:flex;
flex-direction:column;
padding:10px;

gap:5px;
@media screen and (max-width: 830px) {
  
    flex-direction: column;
    gap: 10px;
    align-items: center;
    font-size:20px
  }
`;
const Email=styled.div`
display:flex;
flex-direction:row;
position:relative;
font-weight: 700;
  font-family: "Roboto";
  gap:5px;
flex-wrap:wrap;
@media screen and (max-width: 830px) {
  
    flex-direction: row;
    gap: 5px;
    align-items: center;
    font-size:20px
  }
  
`;
const Linkdin=styled.div`
display:flex;
flex-direction:row;
position:relative;
font-weight: 700;
  font-family: "Roboto";
  gap:5px;
  @media screen and (max-width: 830px) {
  
    flex-direction: row;
    gap: 5px;
    align-items: center;
    font-size:20px
  }
`;
const Github=styled.div`
display:flex;
flex-direction:row;
position:relative;
font-weight: 700;
  font-family: "Roboto";
  gap:5px;
  @media screen and (max-width: 830px) {
  
    flex-direction: row;
    gap: 5px;
    align-items: center;
    font-size:20px
  }
`;


const Contact=()=>{
    return (
    <Section id='contact'>
        <Contacts>
            Contact
            <p style={{fontSize:'25px'}}>Feel free to contact</p>

        </Contacts>
        <Details>
            <Email >
                <EmailRounded style={{fontSize:'25px',hight:'5vh',width:'5vh'}}/>
                <a href='mailto:vivekshukla979393@gmail.com' style={{textDecoration:'none',fontSize:'25px',color:"#FFFFFF"}}>
                    Email
                </a>

            </Email>
            <Linkdin>
            <img src={logo1} style={{hight:'5vh',width:'5vh'}}/>
            <a href='https://linkedin.com/in/vivek-shukla-89b259228' style={{textDecoration:'none',fontSize:'25px',color:"#FFFFFF"}}>
                    Linkdin
                </a>

            
            </Linkdin>
            <Github>
            <img src={logo} style={{hight:'5vh',width:'5vh'}}/>
            <a href='https://github.com/vivek979393' style={{textDecoration:'none',fontSize:'25px',color:"#FFFFFF"}}>
                    Github
                </a>
                

            </Github>

        </Details>
    </Section>
    )
}

export default Contact;