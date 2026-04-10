import { teamMembers } from '../../data/spa-data';
import { getImageURL } from '../../utils/functions';
import { TeamCards } from '../Contact';
import styles from './selected-page.module.css'


const SelectedPage = ({ article, updateFunction }) => {

    if (!article) return null

    const { title, text, image, category } = article;
    
    return (
        <div className={`${styles.selectedPage} ${styles[category]}`}>
            <h2>{title}</h2>
            {image  ?  <img className={`${styles.image} ${styles[category]}`} src={getImageURL(`${image}`)} />
                    :  <img className={styles.image} src={getImageURL('default.png')} />}
            <p className={`${styles.text} ${styles[category]}`}>{text}</p>
            <TeamCards 
                category={category} 
                team={teamMembers} />
            <button onClick={() => updateFunction(null)}>Back to home</button>
        </div>
    )
}

export default SelectedPage