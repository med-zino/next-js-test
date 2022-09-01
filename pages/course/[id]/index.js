import React from 'react'
import Navbar from '../../../components/course/navbar'
import styles from '../../../styles/course.module.sass'
import Sidebar from '../../../components/course/sidebar'
import Subcontainer from '../../../components/course/subcontainer'
import Footer from '../../../components/course/footer'

export default function index() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <Sidebar />

        <div className={styles.right}>
          <Subcontainer />

          <Footer />
        </div>
      </div>
    </div>
  )
}
