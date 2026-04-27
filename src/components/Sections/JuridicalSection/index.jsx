import styles from './juridical.module.css'
import { SlArrowRight } from "react-icons/sl";

const JuridicalSection = () => {
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

export default JuridicalSection