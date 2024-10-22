import styles from './App.module.scss'
import LeftBlock from './components/leftBlock/LeftBlock'

function App() {
  return <div className={styles.container}>
    <LeftBlock />
    {/* 
    <div>
    <Header />
    <CentralBlock />
    </div> */}
  </div>
}

export default App
