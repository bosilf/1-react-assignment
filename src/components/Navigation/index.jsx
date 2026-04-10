import styles from './nav.module.css'
import { articles } from '../../data/spa-data'


const getArticleByCategory = (category) => 
    category === "home"
        ?   null 
        :   articles.find(articleObject => articleObject.category === category) 
        ||  null

export const Navigation = ({ updateFunction, category }) => {  
    
    //My old Inline function that used to be repeated in each Nav component:
    // const handleClick = (pageCategory) => {
    //     if (pageCategory === "home") {
    //         updateFunction(null);
    //     } else {
    //         const article = articles.find(articleObject => articleObject.category === pageCategory)
    //         updateFunction(article)
    //     }
    // }

    return (
        <nav className={`${styles.nav} ${styles[category] || ""}`}>
            {articles.map((article, index) => (
                <span
                    key={index}
                    // OLD:
                    // onClick={() => handleClick(article.category)}
                    onClick={() => updateFunction(getArticleByCategory(article.category))}
                    className={styles.navItem}
                >
                    {article.category}
                </span>
            ))}
        </nav>
    )
}

export const HeroNavigation = ({ updateFunction }) => {

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

export const TeamNavigation = ({ updateFunction }) => {
    return (
        <nav className={`${styles.nav} ${styles.secondNav}`}>
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

export const ThirdNavigation = ({ updateFunction }) => {
    return (
        <nav className={`${styles.nav} ${styles.thirdNav}`}>
            {articles
                .filter(article => article.category === "thoughts")
                .map((article, index) => (
                    <span
                        key={index}
                        onClick={() => updateFunction(getArticleByCategory(article.category))}
                        className={styles.navItem}
                    >
                        {article.category}
                    </span>
                ))
            }
        </nav>
    )
}

export default Navigation
