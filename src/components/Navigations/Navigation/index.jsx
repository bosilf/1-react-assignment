import styles from './nav.module.css'
import { articles } from '../../../data/spa-data'

export const Navigation = ({ updateFunction, category }) => {  
    const getArticleByCategory = (category) => 
        category === "home"
            ?   null 
            :   articles.find(articleObject => articleObject.category === category) 
            ||  null

    return (
        <nav className={`${styles.nav} ${styles[category] || ""}`}>
            {articles.map((article, index) => (
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

export default Navigation
