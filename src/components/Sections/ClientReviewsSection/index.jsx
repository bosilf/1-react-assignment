import styles from './client-reviews.module.css'
import { getImageURL } from '../../../utils/functions';
import SimpleParallax from 'simple-parallax-js';


const ClientReviewsSection = () => {
    return (
        <div className={styles.review}>
            <div className={styles.reviewText}>
                <h2 className={styles.reviewTitle}>Så säger våra kunder</h2>
                <h5 className={styles.reviewQuote}>"</h5>
                <p className={styles.reviewPararagraph}>WA advokatbyrå hjälper oss att göra rätt och ha ett kunskapsövertag i våra affärer.</p>
            </div>
            <SimpleParallax orientation='down' delay={1} scale={1.4} >
                <img className={styles.image} src={getImageURL('wa-advokatbyra-stockholm-vara-kunder-sager.jpg')} />
            </SimpleParallax>
        </div>
    )
}

export default ClientReviewsSection