import styles from './header.module.css'
import { MobileMenuTop } from "../MobileMenu"
import Navigation from '../Navigation'



const Header = ({ category, updateFunction}) => {


    return (
        <div className={styles.header}>
            <div className={`${styles.headerDesktop} `}>
                <Navigation updateFunction={ updateFunction } category={category}  />
            </div> 
            <MobileMenuTop updateFunction={ updateFunction } category={category} />
        </div>
    )
}

export default Header