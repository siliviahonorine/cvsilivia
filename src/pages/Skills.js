import React from 'react';
import './Skills.css';
import Skill from './Skill';
import Interests from './Interests'



const Skills = () =>{
  return(
    <>
    <div className="Skills">
        <h2 className="h2">Compétence</h2>
            <Skill title="HTML" rating="5"/>
            <Skill title="CSS" rating="5"/>
            <Skill title="JAVASCRIPTS" rating="5"/>
            <Skill title="REACT" rating="5"/>
            <Skill title="NODE" rating="5"/>

   </div>
   <div className="Skills">
        <h2 className="h2">Langue</h2>
        <Skill title="MALAGASY" rating="5"/>
        <Skill title="FRANCAIS" rating="5"/>
        <Skill title="ANGLAIS" rating="5"/>
        <Skill title="ALLEMAND" rating="5"/>



   </div>
   <Interests />
</>
  )
}
export default Skills;