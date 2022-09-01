/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styles from './navbar.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'

export default function navbar() {
  return (
    <div className={styles.main}>
      <FontAwesomeIcon icon={faCircleArrowLeft} />
      <div>
        <p className={styles.subtitle}>Back to</p>
        Learning Path
      </div>
      <p className={styles.title}>
        Figma To Webflow To Freelancing
        <span>
          <FontAwesomeIcon icon={faBell} />
          Available until 24 Jul 2022
        </span>
      </p>
      <div className={styles.trophy}>
        <img src='/trophy.svg' alt='trophy' />
        <p>
          1250 <span>Reward Points</span>
        </p>
      </div>
    </div>
  )
}
