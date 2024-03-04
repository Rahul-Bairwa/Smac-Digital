import { FaPhoneVolume } from 'react-icons/fa';
import logo from '../assets/logo_2.png'
import { AiFillCaretDown } from 'react-icons/ai';
import { useRef, useState } from 'react';
import { navItems, heads } from '../data'
import { Link } from 'react-router-dom';
const Navbar: React.FC = () => {
    const popUpVisibility = useRef<HTMLDivElement>(null);
    const buttonBg = useRef<HTMLButtonElement>(null);
    const [navBgColor, setNavBgColor] = useState(false)
    const changeBgColor = () => {
        if (window.scrollY >= 7) {
            setNavBgColor(true)
        }
        else {
            setNavBgColor(false)
        }
    }
    window.addEventListener('scroll', changeBgColor)

    const showPopUp = () => {
        if ((popUpVisibility.current?.style.display === "block" || buttonBg.current?.style.backgroundColor === '#red')) {
            if (popUpVisibility.current) {
                popUpVisibility.current.style.display = "none";
            }
            if (buttonBg.current) {
                buttonBg.current.style.backgroundColor = "#004500";
                setTimeout(() => {
                    if (buttonBg.current) {
                        buttonBg.current.style.backgroundColor = "#ffffff";
                    }
                }, 100);
            }
        } else {
            if (popUpVisibility.current) {
                popUpVisibility.current.style.display = "block";
            }
            if (buttonBg.current) {
                buttonBg.current.style.backgroundColor = "#004500";
                setTimeout(() => {
                    if (buttonBg.current) {
                        buttonBg.current.style.backgroundColor = "#ffffff";
                    }
                }, 100);
            }
        }
    };

    return (
        <>
            <nav className={navBgColor ? 'active-nav' : ''}>
                <div className="nav-section" >
                    <img src={logo} alt="" />
                    {
                        navItems.map(e => <Link to={`/${e.toLowerCase()}`}>{e}</Link>)
                    }
                    <button ref={buttonBg} onClick={showPopUp}><FaPhoneVolume /><span>Let's Talk!</span><AiFillCaretDown />
                    </button>
                </div>
            </nav>
            <div ref={popUpVisibility} className="lets-talk-pop-up" >
                {
                    heads.map(e =>
                        <div>
                            <h4 >{e.name}</h4>
                            <h5 style={{ fontStyle: 'italic', color: '#0060ff' }}>{e.office}</h5>
                            <a style={{ fontSize: ".8rem" }} href={`tel:${e.mobile}`}><FaPhoneVolume />{e.mobile}</a>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Navbar