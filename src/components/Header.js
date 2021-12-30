import React from 'react'
import Logo from '../images/logo.png'
import {BiSearchAlt} from 'react-icons/bi'

import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div className='showcase-header'>
           <div className='container'>
            <header className='header'>
                <img className='logo' src={Logo} alt="logo"/>
                <ul className='nav'>
                    <Link className='link' to='/Accueil'>ACCUEIL</Link>
                   <Link className='link' to ='/Fondation'>LA FONDATION</Link>
                   <Link className='link' to ='/'>LES ADHERENTS  </Link>
                   <Link className='link' to ='/'>PRESTATION  </Link>
                   <Link className='link' to ='/'>AVIS ET ANNONCES  </Link>
                   <Link className='link' to ='/'>PRESSE  </Link>
                   <button type='button' className='searchbtn'><BiSearchAlt color='white' size='24px' className='search'/></button>
                </ul> 
            </header>
           
        </div> 
        </div>
        
    )
}
