import { contacts } from '../../data/spa-data';
import { getImageURL } from '../../utils/functions';
import TeamNavigation from '../Navigations/TeamNavigation'
import styles from './contact.module.css'


export const Contact = ({updateFunction }) => {
    const { email, phone, text } = contacts[0];
    
    return (
        <div className={styles.contact}>
            <p>{text}</p>
            <h2 className={styles.h2Contact}>{phone}</h2>
            <h2 className={styles.h2Contact}>{email}</h2>
            <TeamNavigation updateFunction={updateFunction} />
        </div>
    )
}

export const TeamCards = ({ category, team } ) => {
    return (
        <div className={`${styles.teamCards} ${styles[category]}`}>
            {team.map((member, index) => (
                <div key={index} className={styles.card}>
                    <img className={styles.image} src={getImageURL(`${member.teamImg}`)} />
                    <h4>{member.teamName}</h4>
                    <p>{member.teamTitle}</p>
                </div>
            ))}
        </div>
    )
}

export default Contact