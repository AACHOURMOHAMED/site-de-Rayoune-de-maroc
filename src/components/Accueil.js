import React from 'react'
import back from '../images/back.jpg'
import logo2 from '../images/logo2.png'
import {FaUserAlt} from'react-icons/fa'
import { Button } from './Button'
export const Accueil = () => {
    return (
        <div id='showcase-Accuiel'>
            <div className='back'>
                <div className='container'>
                    <div className='controle-content'>
                        <div className='content'>
                                <h1 className='nous-text'>Nous vous <br/>accompagnons
                                <br/>pour la vie</h1>  
                                <Button buttonStyle={'btn--primary'} buttonSize={'btn--large'}><FaUserAlt className='userbtn'/> ESPACE ADHERENT</Button>
                             </div> 
                             <div className='content2'>
                           
                                <img className='logo2' src={logo2} />
                                <p className='parg'>
                                Fondation Mohammed VI de promotion<br/>
                                des œuvres sociales des fonctionnaires<br/>
                                et agents du Ministère des Affaires <br/>
                                Étrangères et de la Coopération.<br/>
                                </p>
                           
                            </div> 
                        </div> 
                </div>
                
            </div>
            <img className='back-image' src={back} alt="back image" />
           <div className='container'>

            </div> 
        </div>
        
    )
}
