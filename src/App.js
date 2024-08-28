import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero.jsx';
import styled from 'styled-components';
import NavBar from './Components/NavBar.jsx';
import { useState } from 'react';
import Project from './Components/Projects.jsx';
import About from './Components/About.jsx';
import Experience from './Components/Experience.jsx';
import Contact from './Components/Contact.jsx';


const Frame=styled.div`

   background-color:#04152d;
   display:flex;
   flex-direction:column;
   
  width: 100%;
  height: 100%;
  overflow: hidden;
`;


function App() {



  return (
    <Frame>
      
      <NavBar/>
      <body>
      <Hero/>
      <About/>
      <Experience/>
      <Project/>
      <Contact/>
      </body>
      

    </Frame>
      
    
    
  );
}

export default App;



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Hero from './Components/Hero.jsx';
// import NavBar from './Components/NavBar.jsx';
// import Project from './Components/Projects.jsx';
// import About from './Components/About.jsx';
// import Experience from './Components/Experience.jsx';
// import Contact from './Components/Contact.jsx';
// import styled from 'styled-components';

// const Frame = styled.div`
//   background-color: #04152d;
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
// `;

// function App() {
//   return (
//     <Router>
//       <Frame>
//         <NavBar />
//         <Routes>
//           <Route path="/" element={<Hero />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/projects" element={<Project />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/experience" element={<Experience />} />
//         </Routes>
//       </Frame>
//     </Router>
//   );
// }

// export default App;
