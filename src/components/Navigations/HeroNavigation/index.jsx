import styles from './hero-nav.module.css'
import { articles } from '../../../data/spa-data'




const HeroNavigation = ({ updateFunction }) => {
    const getArticleByCategory = (category) => 
        category === "home"
            ?   null 
            :   articles.find(articleObject => articleObject.category === category) 
            ||  null

    return (
        <nav className={`${styles.nav} ${styles.heroNav}`}>
            <div className={styles.heroNavContent}>
                {articles.map((article, index) => 
                    <span
                        key={index}
                        onClick={() => updateFunction(getArticleByCategory(article.category))}
                        className={styles.navItem}
                    >
                        {article.category}
                    </span>
                )}
            </div>
        </nav>
    )
}

export default HeroNavigation
