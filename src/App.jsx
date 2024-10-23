import styles from './App.module.scss'
import MenuTop from './components/menuTop/MenuTop'
import LeftBlock from './components/leftBlock/LeftBlock'
import Footer from './components/footer/Footer'
import CentralBlock from './components/centralBlock/CentralBlock'

function App() {
  return <div className={styles.container}>
      <LeftBlock />
    <div className={styles.container__rightBlock}>
      <MenuTop />
      <div className={styles.container__rightBlock__content}>
        <CentralBlock />
        <Footer />
      </div>
    </div>
  </div>
}

export default App
