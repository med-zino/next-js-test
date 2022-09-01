/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './subcontainer.module.sass'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCirclePlay } from '@fortawesome/free-solid-svg-icons'

export default function subcontainer() {
  return (
    <div className={styles.subcontainer}>
      <p className={styles.title}>What is Webflow?</p>
      <div className={styles.progress}>
        <div>
          <ProgressBar now={100} className={styles.Progressbar} />
          <FontAwesomeIcon icon={faCirclePlay} />
          Lesson one
        </div>
        <div className={styles.active}>
          <ProgressBar now={100} className={styles.Progressbar} />
          <FontAwesomeIcon icon={faCirclePlay} />
          Lesson Two
        </div>
        <div>
          <ProgressBar now={0} className={styles.Progressbar} />
          <FontAwesomeIcon icon={faCirclePlay} />
          Lesson three
        </div>
      </div>

      <img src='/cover.svg' />
    </div>
  )
}
