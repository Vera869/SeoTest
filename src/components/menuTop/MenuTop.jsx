import styles from './StyledMenuTop.module.scss';

const MenuTop = () => {

   return <div className={styles.container}>
      <div className={styles.container__header}>
         <div className={styles.container__header__update}>
            <input className={styles.project} type="text" list="options" />
               <datalist id="options">
                  <option value="Проект1"></option>
                  <option value="Проект2"></option>
                  <option value="Проект3"></option>
               </datalist>
            <div className={styles.update}>
                <img className={styles.update__img} src='/img/arrows-ring.svg'/>
                <p className={styles.update__txt}>Обновлено 18.10.2024 в 10:11</p>
            </div>   
         </div>
         <div className={styles.container__header__button}>
            <img className={styles.container__header__button__img} src='/img/plus.svg'/>
            <p className={styles.container__header__button__txt}>Новый проект</p>
         </div>
      </div>
      <img className={styles.container__btn} src='/img/btn.svg'/>
   </div>
};

export default MenuTop;