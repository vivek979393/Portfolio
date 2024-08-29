import React, { useState } from "react"
import styled from "styled-components";
import{ CloseRounded, MenuRounded, Style}  from "@mui/icons-material";
import { Link } from "react-scroll";




const MainContainer=styled.div`
position: fixed;
width:100%;
height:40px;
  display: flex;
  scroll-padding-top: 70px;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  z-index: 9999;
  
  
  

background: #19276d;
    
@media (max-width: 750px) {
    
    
    flex-direction: row;
    align-items: flex-start;
    justify-content:space-between;
    position:fixed;
  }
    
  }


`;
const Title=styled.div`

padding:10px;
gap:10px;
font-size:20px;
font-weight:bold;
color:#FFFFFF
`
;



const Items=styled(Link)`
font-family: "Roboto";
padding:10px 20px;
cursor:pointer;
color:#FFFFFF;
text-decoration:none;
 &:hover {
    border-radius:50% 2%;
    background: linear-gradient(90deg, #19276d 0%, rgba(25, 55, 109, 0) 100%);
    transition:background 0.5s;
    
  }
`;
const Itemss=styled.div`

display:flex;
flex-direction:row;
position: Relative;
flex-wrap:wrap;
padding:10px;
gap:10px;
color:#FFFFFF;
@media (max-width: 750px) {
    
    display: ${props => (props.menuOpen ? 'none' : 'flex')};
    flex-direction: column;
    gap:10px 10px;
    position: absolute;
    border-radius: 10px;
  
    background: linear-gradient(90deg, #19276d 0%, rgba(25, 55, 109, 0) 100%);
    
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
    
  }


`;

const Menu=styled.div`
  
  position: absolute;
    right: 0;
    margin-right: 10%;
    flex-direction: column;
    align-items: flex-end;
    gap: 11px;
    z-index: 3;
  @media screen and (max-width: 750px) {
    position: relative;
    flex-direction: column;
    align-items: flex-end;
    gap: 11px;
    z-index: 3;
    font-size:70%
  }
  

`;

const ToggleButton=styled.div`

color: #fff;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  display:none;
@media (max-width: 750px) {
    display: block;
    align-items: flex-start;
  }
`;

const NavBar=()=>{

    const[menuOpen,setMenuOpen]=useState(true);
    const[menuClose,setMenuClose]=useState(false);

    const toggleMenu=()=>{
        setMenuOpen(!menuOpen)
    };

    

    

    return (
    <MainContainer >
        
        <Title style={{ top:'10px',left:'10px'}}>
            Portfolio
        </Title>
        <Menu >
        
        <ToggleButton onClick={toggleMenu}>
        {menuOpen ? <MenuRounded/> :  <CloseRounded /> }
        </ToggleButton>
        
        
        
        <Itemss menuOpen={menuOpen}  onClick={() => setMenuOpen(false)} style={{ cursor: "pointer"}} >
            
            <Items to="Hero" activeClass='active' smooth={true} spy={true} offset={-100} duration={500} >Home</Items>
            <Items to="about" activeClass='active' smooth={true} spy={true} offset={-70} duration={500}>About</Items>
            <Items to="experience" activeClass='active' smooth={true} spy={true} offset={-50} duration={500}>Skills</Items>
            <Items to="project" activeClass='active' smooth={true} spy={true} offset={-70} duration={500}>Projects</Items>
            <Items to="contact" activeClass='active' smooth={true} spy={true} offset={-70} duration={500}>Contact</Items>
          </Itemss>
          
        
        </Menu>

        
        
        
        

    </MainContainer>
    )
}

export default NavBar;

// import React, { useState } from "react";
// import styled from "styled-components";
// import { CloseRounded, MenuRounded } from "@mui/icons-material";
// import { Link } from "react-router-dom";

// const MainContainer = styled.div`
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding-top: 61px;
//   z-index: 2;
//   background: rgb(25, 55, 109);
//   background: linear-gradient(90deg, #19276d 0%, rgba(25, 55, 109, 0) 100%);
//   @media (max-width: 750px) {
//     background: transparent;
//     flex-direction: column;
//     align-items: flex-start;
//     position: relative;
//   }
// `;

// const Title = styled.div`
//   padding: 10px;
//   gap: 10px;
//   font-size: 20px;
//   font-weight: bold;
//   color: #ffffff;
// `;

// const Items = styled(Link)`
//   font-family: "Roboto";
//   padding: 10px 40px;
//   cursor: pointer;
//   text-decoration: none;
//   color: #ffffff;
//   &:hover {
//     border-radius: 50% 2%;
//     background: linear-gradient(90deg, #19276d 0%, rgba(25, 55, 109, 0) 100%);
//     transition: background 0.5s;
//   }
// `;

// const Itemss = styled.div`
//   display: flex;
//   flex-direction: row;
//   position: relative;
//   flex-wrap: wrap;
//   padding: 10px;
//   gap: 10px;
//   color: #ffffff;
//   @media (max-width: 750px) {
//     display: ${props => (props.menuOpen ? 'flex' : 'none')};
//     flex-direction: column;
//     align-items: center;
//     gap: 13px;
//     border-radius: 10px;
//     background: linear-gradient(90deg, #19276d 0%, rgba(25, 55, 109, 0) 100%);
//     padding: 24px 33px;
//     box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
//   }
// `;

// const Menu = styled.div`
//   position: absolute;
//   right: 0;
//   margin-right: 10%;
//   flex-direction: column;
//   align-items: flex-end;
//   gap: 11px;
//   z-index: 3;
//   @media screen and (max-width: 750px) {
//     position: relative;
//     flex-direction: column;
//     align-items: flex-end;
//     gap: 11px;
//     z-index: 3;
//     font-size: 70%;
//   }
// `;

// const ToggleButton = styled.div`
//   color: #fff;
//   border: none;
//   padding: 0.5rem;
//   cursor: pointer;
//   font-size: 1rem;
//   display: none;
//   @media (max-width: 750px) {
//     display: block;
//     align-items: flex-start;
//   }
// `;

// const NavBar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(prev => !prev);
//   };

//   return (
//     <MainContainer>
//       <Title>
//         Portfolio
//       </Title>
//       <Menu>
//         <ToggleButton onClick={toggleMenu}>
//           {menuOpen ? <CloseRounded /> : <MenuRounded />}
//         </ToggleButton>
//         <Itemss menuOpen={menuOpen} onClick={() => setMenuOpen(false)}>
//           <Items to="/">Home</Items>
//           <Items to="/about">About</Items>
//           <Items to="/projects">Projects</Items>
//           <Items to="/contact">Contact</Items>
//         </Itemss>
//       </Menu>
//     </MainContainer>
//   );
// };

// export default NavBar;
