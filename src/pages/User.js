import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
const User = () =>{
  return(
    
  <div className="User">
    <img src="./images/silivia.JPG" alt="" className="User_avatar"></img>
    <h1 className="user_name">SILIVIA Honorine</h1>
    <p className="user_profession">Developpeur web</p>
    <div className="user_infos">
      <p className="user_info"><FontAwesomeIcon icon={faHome} />Tanambao-Morondava</p>
      <p className="user_info"><FontAwesomeIcon icon={faPhone} /> <a href="tel:+327688515" > 07688515 </a></p>
      <p className="user_info"><FontAwesomeIcon icon={faEnvelope} /><a href="mailto:siliviannonorine@gmail.com" >siliviannonorine@gmail.com</a></p>
      <p className="user_info"><FontAwesomeIcon icon={faCalendarAlt} /> Date de naissance:16 septembre 2003</p>
      <p className="user_info"><FontAwesomeIcon icon={faMapMarkerAlt} /> Date de naissance:Morondava</p>

    </div>
   </div>

  )
}
export default User;