import styles from './header.module.css'
import { MobileMenu } from "../MobileMenu"
import Navigation from '../Navigations/Navigation'

const Header = ({ category, updateFunction}) => {
    return (
        <div className={styles.header}>
            <div className={`${styles.headerDesktop} `}>
                <Navigation updateFunction={ updateFunction } category={category}  />
            </div> 
            <MobileMenu updateFunction={ updateFunction } category={category} />
        </div>
    )
}

export default Header