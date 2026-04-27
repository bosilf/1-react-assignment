import styles from './first-section.module.css'

export const FirstSection = () => {
    return (
        <section className={`${styles.section} ${styles.sectionWidth}`}>
            <h1 className={styles.sectionTitle}>Spetskompetens inom entreprenadjuridik och offentlig upphandling</h1>
            <div className={styles.sectionText}>
                <h3 className={styles.wa}>WA</h3>
                <p className={styles.sectionParagraph}>Advokatbyrå är inriktad mot bygg- och fastighetsbranschen. Vi har en stor branschkunskap och lång erfarenhet av att hantera allt ifrån de mest komplicerade entreprenadtvisterna och entreprenadavtalen till mindre entreprenader.</p>
                <p className={styles.sectionParagraph}>Vi har även de erfarna advokaterna och spetskompetensen för hantering av offentlig upphandling och kommersiella avtal. Som en del av vårt erbjudande tillhandahåller WA Advokatbyrå dessutom utbildningar inom våra rättsområden.</p>
            </div>
        </section>
    )
}

export default FirstSection