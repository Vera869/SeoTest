import styles from './App.module.scss'
import MenuTop from './components/menuTop/MenuTop'
import LeftBlock from './components/leftBlock/LeftBlock'

function App() {
  return <div className={styles.container}>
    <div className={styles.container__menu}>
    <LeftBlock />
    </div>
    <div className={styles.container__content}>
      <MenuTop />
    {/* <CentralBlock /> */}
    </div>
  </div>
}

export default App
