import React from 'react'
import back from '../images/back.jpg'
import logo2 from '../images/logo2.png'
import pic1 from '../images/aid.png'
import pic2 from '../images/elkebir.png'
import pic3 from '../images/trans.png'
import pic4 from '../images/Restauration.png'

import {FaAngleRight} from 'react-icons/fa'
import {FaAngleLeft} from 'react-icons/fa'
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
            {/* section prestation */}
            <div className='showcase-prestation'>
                <div className='container'>
                    <div className='content'>
                        <h1 className='text-pre'>
                            PRESTATIONS
                        </h1>

                        {/* card-circle */}
                        <div className='content-card-circle'>

                            <FaAngleLeft size={"41px"} color='#EC0928'/>                            
                            <div className='card-circle'>
                                <img src={pic1} alt='image'></img>
                                <h2 className='text-card-circle'>AIDES SOCOLAIRE</h2>
                            </div>  

                            <div className='card-circle'>
                                <img src={pic2} alt='image'></img>
                                <h2 className='text-card-circle'>AID EL KEBIR</h2>
                            </div>  

                            <div className='card-circle'>
                                <img src={pic3} alt='image'></img>
                                <h2 className='text-card-circle'>TRANSPORT</h2>
                            </div>  

                            <div className='card-circle'>
                                <img src={pic4} alt='image'></img>
                                <h2 className='text-card-circle'>RESTAURATION</h2>
                            </div>  
                            <FaAngleRight size={"41px"} color='#EC0928'/>                            
                           
                        </div>
                        
                        {/*End card-circle */}

                        <section id='showcase-actualites'>
                            <div className='container'>
                                <div className='content'>
                                    
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
