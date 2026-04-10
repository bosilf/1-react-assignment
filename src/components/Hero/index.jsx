import styles from './hero.module.css'
import { getImageURL } from '../../utils/functions'
import SimpleParallax from "simple-parallax-js"
import { HeroNavigation } from '../Navigation'



const Hero = ({updateFunction}) => {
    return (
        <div className={styles.hero}>
            <h4 className={styles.heroTitle}>Advokater specialiserade inom entreprenadrätt och offentlig upphandling</h4>
            <img className={styles.heroPeopleImg} src={getImageURL("Layer1.png")} />
            <SimpleParallax scale={1.4} orientation='down' delay={0.1} maxTransition={19}>
                <img className={styles.heroImg} src={getImageURL("Layer0.png")} />
            </SimpleParallax>    
            <HeroNavigation updateFunction={updateFunction}/>
        </div>
    )
}

export default Hero