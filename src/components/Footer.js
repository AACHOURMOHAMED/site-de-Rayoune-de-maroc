import React from 'react'
import pic1 from '../images/back-footer.png'
import logo from '../images/logo2.png'
import { Button } from './Button'
import {FaUserAlt} from'react-icons/fa'

export const Footer = () => {
    return (
        <footer id='footer'>
            <img className='back-F' src={pic1} alt='back footer'/>
            <div className='back-I'></div>
            <div className='container'>
                <div className='content'>
                    <img className='logo2' src={logo} />
                    <center><p className='parg-footer'>
                                Fondation Mohammed VI de promotion
                                des œuvres sociales des fonctionnaires
                                et agents du Ministère des Affaires 
                                Étrangères et de la Coopération.
                    </p>
                        <Button buttonStyle={'btn--circle'}><FaUserAlt className='userbtn'/> </Button>
                        <Button buttonStyle={'btn--circle'}><FaUserAlt className='userbtn'/> </Button>
                        <Button buttonStyle={'btn--circle'}><FaUserAlt className='userbtn'/> </Button>
                        <Button buttonStyle={'btn--circle'}><FaUserAlt className='userbtn'/> </Button>

                    
                    </center>
                </div>
            </div>
        </footer>
    )
}
