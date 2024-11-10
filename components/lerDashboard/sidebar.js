/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './sidebar.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBookOpen,
  faGear,
  faCircleInfo,
  faCertificate,
  faChartBar,
  faFileLines,
  faCompassDrafting,
} from '@fortawesome/free-solid-svg-icons'

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <img src='/z-learn.svg' alt='logo wasait' />
      </div>
      <ul>
        <li className={styles.lif}>
          <FontAwesomeIcon icon={faChartBar} />
          Overview
        </li>
        <li>
          <FontAwesomeIcon icon={faFileLines} />
          My Learning
        </li>
        <li>
          <FontAwesomeIcon icon={faCompassDrafting} />
          My Activities
        </li>
        <li>
          <FontAwesomeIcon icon={faBookOpen} />
          Library
        </li>
        <li>
          <FontAwesomeIcon icon={faCertificate} />
          Certifications
        </li>
      </ul>
      <div className={styles.footer}>
        {' '}
        <ul>
          <li>
            <FontAwesomeIcon icon={faGear} />
            Settings
          </li>
          <li>
            <FontAwesomeIcon icon={faCircleInfo} />
            Need help?
          </li>
        </ul>
      </div>
    </div>
  )
}
