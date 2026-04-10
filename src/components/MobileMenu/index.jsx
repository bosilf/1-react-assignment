import styles from './mobile-menu.module.css'
import { useState } from 'react'
import Navigation from '../Navigation';
// import ShoppingCartIcon from '../ShoppingCartIcon';



export const MobileMenu = ({updateFunction}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

        return (
        <>
            <div className={`${styles.mobileIcon} ${isMenuOpen ? styles.active : "" }`} onClick={toggleMenu}>
                <div className={`${styles.line} ${styles.line1} ${isMenuOpen ? styles.active : ""}`}></div>
                <div className={`${styles.line} ${styles.line2} ${isMenuOpen ? styles.active : ""}`}></div>
                <div className={`${styles.line} ${styles.line3} ${isMenuOpen ? styles.active : ""}`}></div>
            </div>
            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ""}`} >
                <Navigation updateFunction={ updateFunction } />
            </div>
            <div className={`${styles.menuShut} ${isMenuOpen ? styles.active : "" }`} onClick={toggleMenu}></div>
        </>
    );
}


export const MobileMenuTop = ({updateFunction, category}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

        return (
        <>
            <div className={`${styles.mobileIcon} ${isMenuOpen ? styles.active : "" } `} onClick={toggleMenu}>
                <div className={`${styles.line} ${styles.line1} ${isMenuOpen ? styles.active : ""} ${styles[category] || ""}`}></div>
                <div className={`${styles.line} ${styles.line2} ${isMenuOpen ? styles.active : ""} ${styles[category] || ""}`}></div>
                <div className={`${styles.line} ${styles.line3} ${isMenuOpen ? styles.active : ""} ${styles[category] || ""}`}></div>
            </div>
            <div className={`${styles.mobileMenuTop} ${isMenuOpen ? styles.active : ""}`} >
                <div className={`${styles.mobileMenuContent} ${isMenuOpen ? styles.active : ""}`}>
                    <Navigation updateFunction={ updateFunction } />
                </div>
            </div>
            <div className={`${styles.menuShut} ${isMenuOpen ? styles.active : "" }`} onClick={toggleMenu}></div>
        </>
    );
}

export default MobileMenu;