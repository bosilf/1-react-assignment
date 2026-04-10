import styles from './section.module.css'
import { SlArrowRight } from "react-icons/sl";
import SimpleParallax from "simple-parallax-js"
import { getImageURL } from '../../utils/functions';



export const Section = () => {
    return (
        <section className={`${styles.section1} ${styles.sectionWidth}`}>
            <h2 className={styles.h2}>Spetskompetens inom entreprenadjuridik och offentlig upphandling</h2>
            <div className={styles.about}>
                <h3 className={styles.wa}>WA</h3>
                <p className={styles.p}>Advokatbyrå är inriktad mot bygg- och fastighetsbranschen. Vi har en stor branschkunskap och lång erfarenhet av att hantera allt ifrån de mest komplicerade entreprenadtvisterna och entreprenadavtalen till mindre entreprenader.</p>
                <p className={styles.p}>Vi har även de erfarna advokaterna och spetskompetensen för hantering av offentlig upphandling och kommersiella avtal. Som en del av vårt erbjudande tillhandahåller WA Advokatbyrå dessutom utbildningar inom våra rättsområden.</p>
            </div>
        </section>
    )
}

export const Juridical = () => {
    return (
        <section className={styles.juridical}>
            <div className={`${styles.juridicalContent} ${styles.sectionWidth}`}>
                <h2>Juridiska tjänster</h2>
                <p>Du får rådgivning på hög nivå, där både juridiska och kommersiella aspekter vägs in. Du möts av ett prestigelöst förhållningssätt och en stark samarbetspartner i dina affärer.</p>
                <div className={styles.category}>
                    <div className={styles.content}><SlArrowRight /> Entreprenadrätt</div>
                    <div className={styles.content}><SlArrowRight /> Konsulträtt</div>
                    <div className={styles.content}><SlArrowRight /> Skadeståndsjuridik</div>
                    <div className={styles.content}><SlArrowRight /> Offentlig upphandling</div>
                    <div className={styles.content}><SlArrowRight /> Avtalsrätt</div>
                </div>
            </div>
        </section>
    )
}

export const ClientReviews = () => {
    return (
        <div className={styles.review}>
            <div className={styles.reviewText}>
                <h2 className={styles.reviewH2}>Så säger våra kunder</h2>
                <h5 className={styles.quote}>"</h5>
                <p className={styles.reviewP}>WA advokatbyrå hjälper oss att göra rätt och ha ett kunskapsövertag i våra affärer.</p>
            </div>
            <SimpleParallax orientation='down' delay={1} scale={1.4} >
                <img className={styles.image} src={getImageURL('wa-advokatbyra-stockholm-vara-kunder-sager.jpg')} />
            </SimpleParallax>
        </div>
    )
}

export default Section