import React from 'react';
import './App.css';
import User from './pages/User';
import Skills from './pages/Skills';
import Profil from './pages/Profil';
import FormationExperience from './pages/FormationExperience';


const App = () =>{
  return(
<>
<div className="App">
  <div className="grid_container">
    <div className="sidebar">
  <User />
  <Skills/>
   
    </div>
    <div className="main">
      <Profil/>
      <FormationExperience />
    </div>
  </div>
</div>

  </>

  );
}
export default App;
