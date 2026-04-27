import styles from './team-nav.module.css'
import { articles } from '../../../data/spa-data'


const TeamNavigation = ({ updateFunction }) => {
    const getArticleByCategory = (category) => 
        category === "home"
            ?   null 
            :   articles.find(articleObject => articleObject.category === category) 
            ||  null

    return (
        <nav className={`${styles.nav} ${styles.teamNav}`}>
            {articles
                .filter(article => article.category === "team")
                .map((article, index) => (
                <span
                key={index}
                onClick={() => updateFunction(getArticleByCategory(article.category))}
                className={styles.navItem}
            >
                {article.category}
            </span>
            ))}
        </nav>
    )
}

export default TeamNavigation