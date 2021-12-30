import React from 'react'
import Logo from '../images/logo.png'
import flagM from '../images/flagM.png'
import {BiSearchAlt} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { Button } from './Button'
export const Header = () => {
    return (
        <div className='showcase-header'>
            <Link className='flag' to='/' >
                <img src={flagM} alt="ARABIC"/>
                <span>FR</span>
            </Link>
            <Link className='flag' to='/' >
                <img src={flagM} alt="ARABIC"/>
                <span>AR</span>
            </Link>
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
                    <Button buttonStyle='btn--circle'><BiSearchAlt color='white' size='24px' className='search'/></Button>
                </ul> 
            </header>
           
        </div> 
        </div>
        
    )
}
