import React from 'react';
import './FormationExperience.css';
import DataFormation from '../datas/Formation';
import DataExperience from '../datas/Experiences';
import Formations from './Formations';
import Experiences from './Experiences';



function FormationExperience() {
  
  return (

    <div>
    <Formations datas={DataFormation}/>
    <Experiences datas={DataExperience}/>
   


    </div>

 
  );
}
export default FormationExperience;

