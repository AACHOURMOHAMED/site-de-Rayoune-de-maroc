import React from 'react'
import Logo from '../images/logo.png'
import flagM from '../images/flagM.png'
import flagF from '../images/flagF.png'
import {BiSearchAlt} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { Button } from './Button'
export const Header = () => {
    return (
        <div className='showcase-header'>
            <div className='topheader'>
                 <Link className='link-topheader' to='/' >
                    <img className='flag' src={flagM} alt="ARABIC"/>
                    <span className='lang'>AR</span>
                </Link>
                <Link className='link-topheader' to='/' >
                    <img className='flag' src={flagF} alt="ARABIC"/>
                    <span className='lang'>FR</span>
                </Link>
            </div>
           
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
