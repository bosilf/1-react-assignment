import styles from './page-content.module.css'
import Hero from '../Hero'
import FirstSection from '../Sections/FirstSection'
import JuridicalSection from '../Sections/JuridicalSection'
import Contact from '../Contact'
import ClientReviewsSection from '../Sections/ClientReviewsSection'


const HomePage = ({ updateFunction }) => {
    return (
        <div className={styles.pageContent}>
            <Hero updateFunction={updateFunction} />
            <FirstSection />
            <JuridicalSection />
            <Contact updateFunction={updateFunction}/>
            <ClientReviewsSection />
        </div>
    )
}

export default HomePage