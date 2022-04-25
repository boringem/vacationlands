import Link from 'next/link'
import Image from 'next/image'
import californiaImg from '../public/images/vl_california.PNG';
import coloradoImg from '../public/images/vl_colorado.PNG';
import idahoImg from '../public/images/vl_idaho.PNG';
import oregonImg from '../public/images/vl_oregon.PNG';
import utahImg from '../public/images/vl_utah.PNG';
import wyomingImg from '../public/images/vl_wyoming.PNG';

export default function Card({ background, title, linkDest }) {
    let bgcolor = background;
    let cardTitle = title;
    let cardLink = 'destinations/' + linkDest;
    
    let colorCl;
    if (bgcolor === 'blue') {
        colorCl = 'm_card u_borderBlue1';
    } else if (bgcolor === 'darkblue') {
        colorCl = 'm_card u_borderBlue2';
    }

    let cardImg
    if (cardTitle === 'California') {
        cardImg = californiaImg
    } else if (cardTitle === 'Colorado') {
        cardImg = coloradoImg
    } else if (cardTitle === 'Idaho') {
        cardImg = idahoImg
    } else if (cardTitle === 'Oregon') {
        cardImg = oregonImg
    } else if (cardTitle === 'Utah') {
        cardImg = utahImg
    } else if (cardTitle === 'Wyoming') {
        cardImg = wyomingImg
    }

    return (
        <div className={colorCl}>
            <Link href={cardLink}>
                <a className="m_cardLink">{cardTitle}</a>
            </Link>
            <Image
                src={cardImg}
                alt={cardTitle}
                className="u_circle"
                width={200}
                height={200}
            />
            <svg xmlns="//www.w3.org/2000/svg" version="1.1" className="svg-filters" style={{display: 'none'}}>
                <defs>
                    <filter id="marker-shape">
                        <feTurbulence type="fractalNoise" baseFrequency="0 0.15" numOctaves="1" result="warp" />
                        <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warp" />
                    </filter>
                </defs>
            </svg>
        </div>
    )
}