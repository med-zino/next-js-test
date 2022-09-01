/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './footer.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

export default function footer() {
  return (
    <div className={styles.main}>
      <FontAwesomeIcon icon={faChevronLeft} />
      <p>
        <span>Previous</span>
        Welcome Page
      </p>
      <img src='/flags2.svg' className={styles.flags} />
      <img src='/flags2.svg' className={styles.flagss} />
      <img src='/flags2.svg' className={styles.flagsi} />
      <p>
        <span>Next Up</span>
        Sign Up with Webflow
      </p>
      <FontAwesomeIcon icon={faChevronRight} className={styles.blue} />
    </div>
  )
}
