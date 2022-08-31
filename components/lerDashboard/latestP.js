/* eslint-disable @next/next/no-img-element */
import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import styles from './latestP.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
export default function latestP() {
  return (
    <div className={styles.lp}>
      Your Latest Progress
      <div className={styles.lpcontainer}>
        <img src='/1.png' alt='VIDEO' />
        <div className={styles.lpsub}>
          <div className={styles.lpsubsub}>
            <span>Design</span>
            <span>Communication</span>
            <span>23 min left</span>
          </div>
          <p className={styles.title}>UX review presentations</p>
          <p className={styles.description}>
            How do you create compelling presentation...
          </p>
          <div className={styles.Progressdiv}>
            <ProgressBar now={50} className={styles.Progress} />
            <span>50%</span>
          </div>
        </div>
        <button>
          Continue <FontAwesomeIcon icon={faArrowRight} />{' '}
        </button>
      </div>
    </div>
  )
}
