/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Home.module.sass'
import Sidebar from '../components/lerDashboard/sidebar'
import Navbar from '../components/lerDashboard/navbar'
import LatestP from '../components/lerDashboard/latestP'
import Cards from '../components/lerDashboard/cards'
import Mylearnings from '../components/lerDashboard/myLearning'
import Right from '../components/lerDashboard/right'

export default function Home() {
  return (
    <div className={styles.dashbord}>
      <Sidebar />
      <div className={styles.container}>
        <Navbar />
        <div className={styles.content}>
          <div className={styles.left}>
            <LatestP />
            <Cards />
            <Mylearnings />
          </div>
          <div className={styles.right}>
            <Right />
          </div>
        </div>
      </div>
    </div>
  )
}
