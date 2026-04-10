import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h4 className={styles.h4}>web-design by:</h4>
      <p className={styles.p}>
        <a href="https://xd.adobe.com/view/3464bc47-7701-441d-93f6-feb28b457f5a-6137/">Emelie Boman Silfverberg (me)</a>
      </p>
    <div className={styles.line}></div>
    </footer>
  )

}

export default Footer