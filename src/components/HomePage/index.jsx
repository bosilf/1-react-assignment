import styles from './page-content.module.css'
import Hero from '../Hero'
import Contact from '../Contact'
import Section, { ClientReviews, Juridical } from '../Section'



const HomePage = ({ updateFunction }) => {
    return (
        <div className={styles.pageContent}>
            <Hero updateFunction={updateFunction} />
            <Section />
            <Juridical />
            <Contact updateFunction={updateFunction}/>
            <ClientReviews />
        </div>
    )
}

export default HomePage