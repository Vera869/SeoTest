import styles from './StyledLeftBlock.module.scss'

const LeftBlock = () => {
    return <div className={styles.container}>
      <div className={styles.container__logo}>
         <h3 className={styles.container__logo__title}>SEO</h3>
         <img className={styles.container__logo__img} src='/img/arrow.svg' alt='arrow'/>
      </div>
      <div className={styles.container__menu}>
         
      </div>
    </div>
};

export default LeftBlock;