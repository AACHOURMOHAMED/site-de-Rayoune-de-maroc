import React from 'react'
import back from '../images/back.jpg'
import logo2 from '../images/logo2.png'
import pic1 from '../images/aid.png'
import pic2 from '../images/elkebir.png'
import pic3 from '../images/trans.png'
import pic4 from '../images/Restauration.png'
import photo1 from '../images/photo-a1.jpg'
import photo2 from '../images/photo-a2.jpg'

import {FaAngleRight} from 'react-icons/fa'
import {FaAngleLeft} from 'react-icons/fa'
import {FaUserAlt} from'react-icons/fa'
import { Button } from './Button'
import { Card } from './Card'
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

                       
                    </div>
                </div>
            </div>




    {/*Section actualites */}

            <div id='showcase-actualites'>
                <div className='container'>
                    <div className='content'>
                        <h1 className='text-a'>
                        actualites
                        </h1>
                        <div className='content-card'>
                            <Card className='card'>
                                
                                <div className='content'>
                                    <h1>
                                        LISTE DES BOURSIERS 2021
                                    </h1>

                                    <label className='date-card'>
                                        Publiée le 20 Dec 2021
                                    </label>
                                    <p className='parg-card'>
                                        Le lundi 20 décembre 2021 à
                                        Rabat, la Fondation a conclu 
                                        des conventions de partenariat
                                        avec huit organismes bancaires
                                        pour la mise en place de sa
                                        nouvelle prestation «Yassir». Ce ...
                                    </p>

                                    <Button buttonStyle={'btn--primary'}  buttonSize={'btn--small'}>PLUS DE DETAILS</Button>
                                </div>




                                <img className='img img1' src={photo1} alt='image'/>
                            </Card>
                            <Card className='card'>
                            <img className='img img2' src={photo2} alt='image'/>    
                            
                            <div className='content'>
                                    <h1>
                                        LISTE DES BOURSIERS 2021
                                    </h1>

                                    <label className='date-card'>
                                        Publiée le 20 Dec 2021
                                    </label>
                                    <p className='parg-card'>
                                        Le lundi 20 décembre 2021 à
                                        Rabat, la Fondation a conclu 
                                        des conventions de partenariat
                                        avec huit organismes bancaires
                                        pour la mise en place de sa
                                        nouvelle prestation «Yassir». Ce ...
                                    </p>

                                    <Button buttonStyle={'btn--primary'} buttonSize={'btn--small'}>PLUS DE DETAILS</Button>
                                </div>



                            </Card >  
                            <div className='width-card'>
                                <Card  cardStyle={ 'card--secondry'}>


                                <div className='content'>
                                    <h1>
                                        LISTE DES BOURSIERS 2021
                                    </h1>

                                    <label className='date-card'>
                                        Publiée le 20 Dec 2021
                                    </label>
                                    <p className='parg-card'>
                                        Le lundi 20 décembre 2021 à
                                        Rabat, la Fondation a conclu 
                                        des conventions de partenariat
                                        avec huit organismes bancaires
                                        pour la mise en place de sa
                                        nouvelle prestation «Yassir». Ce ...
                                    </p>

                                    <Button buttonStyle={'btn--primary'}  buttonSize={'btn--small'}>PLUS DE DETAILS</Button>
                                </div>



                                <img src={photo1} alt='image'/>
                                </Card >
                                <Card cardStyle={ 'card--secondry'}>
                                <img src={photo1} alt='image'/>
                                    
                                <div className='content'>
                                    <h1>
                                        LISTE DES BOURSIERS 2021
                                    </h1>

                                    <label className='date-card'>
                                        Publiée le 20 Dec 2021
                                    </label>
                                    <p className='parg-card'>
                                        Le lundi 20 décembre 2021 à
                                        Rabat, la Fondation a conclu 
                                        des conventions de partenariat
                                        avec huit organismes bancaires
                                        pour la mise en place de sa
                                        nouvelle prestation «Yassir». Ce ...
                                    </p>

                                    <Button buttonStyle={'btn--primary'}  buttonSize={'btn--small'}>PLUS DE DETAILS</Button>
                                </div>



                                </Card> 


                                <label className='voir'>VOIR +</label>  
                            </div>
                        </div>
                              
                    </div>
                </div>            
            </div>

        {/*End Section actualites */}





        </div>
        
    )
}
