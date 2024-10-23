import styles from './StyledCentralBlock.module.scss'

const CentralBlock = () => {
    return <div className={styles.container}>
      <div className={styles.container__top}>
        <div className={styles.container__top__menu}>
          <div className={styles.container__top__menu__search}>
            <i className={styles.container__top__menu__search__i}><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 17.1632L13.5307 12.6938C14.6047 11.4045 15.1402 9.75068 15.026 8.07649C14.9117 6.40231 14.1564 4.83663 12.9171 3.70516C11.6778 2.5737 10.0501 1.96357 8.37243 2.00168C6.69478 2.0398 5.09641 2.72324 3.90983 3.90983C2.72324 5.09641 2.0398 6.69478 2.00168 8.37243C1.96357 10.0501 2.5737 11.6778 3.70516 12.9171C4.83663 14.1564 6.40231 14.9117 8.07649 15.026C9.75068 15.1402 11.4045 14.6047 12.6938 13.5307L17.1632 18L18 17.1632ZM3.20478 8.53106C3.20478 7.47762 3.51716 6.44784 4.10242 5.57194C4.68768 4.69604 5.51953 4.01335 6.49278 3.61022C7.46603 3.20709 8.53697 3.10161 9.57017 3.30712C10.6034 3.51264 11.5524 4.01992 12.2973 4.76481C13.0422 5.50971 13.5495 6.45876 13.755 7.49195C13.9605 8.52515 13.855 9.59609 13.4519 10.5693C13.0488 11.5426 12.3661 12.3744 11.4902 12.9597C10.6143 13.545 9.5845 13.8573 8.53106 13.8573C7.11892 13.8558 5.76507 13.2941 4.76654 12.2956C3.76801 11.297 3.20635 9.9432 3.20478 8.53106Z" fill="#BBBBBB"/>
            </svg></i>
            <input className={styles.container__top__menu__search__input} type='search' placeholder='Начните вводить слово'/>
          </div>
          <div className={styles.container__top__menu__date}>
            <img className={styles.container__top__menu__date__i} src='/img/calendar.svg'/>
            <input className={styles.container__top__menu__date__input} type='text' placeholder='01.10.2024 - 01.11.2024'/>
            <img className={styles.container__top__menu__date__img} src='/img/arrow_blk.svg' alt='arrow'/>
          </div>
          <div className={styles.container__top__menu__add}>
            <img className={styles.container__top__menu__add__btn} src='/img/add.svg' alt='add'/>
            <img className={styles.container__top__menu__add__img} src='/img/arrow_blu.svg' alt='arrow'/>
          </div>
        </div>
        <button className={styles.container__top__btn}>Сбросить сортировку</button>
        <div className={styles.container__top__select}>
          <img className={styles.container__top__select__img} src='/img/table.svg' alt='Настройки'/>
          <p className={styles.container__top__select__txt}>Настройки</p>
        </div>
      </div>
    </div>
};

export default CentralBlock;