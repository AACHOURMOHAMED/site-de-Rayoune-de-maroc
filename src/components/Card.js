import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'


export const Card = ({children,cardStyle,cardSize,Onclick}) => {
    
   const STYLES = [
        'card--primary',
        'card--secondry'
    ]
    
    const SIZE =[
        'card--medium',
        'card--large'
    ]

    const checkCardStyle = STYLES.includes(cardStyle) ?   cardStyle  : STYLES[0];
    const checkCardSize = SIZE.includes(cardSize) ? cardSize : SIZE[0];

    return (
        <Link to='/' className='card-mobile'>
            <div className={`card ${checkCardStyle} ${checkCardSize}`}onclick={Onclick} >
                {children}
            </div>
        </Link>
    )
}
