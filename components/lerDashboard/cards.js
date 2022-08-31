/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './cards.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEllipsis,
  faArrowUp,
  faCircle,
} from '@fortawesome/free-solid-svg-icons'

export default function cards() {
  return (
    <div className={styles.stats}>
      <div className={styles.card}>
        <span>Engagement Score</span>
        <FontAwesomeIcon icon={faEllipsis} className={styles.ficon} />
        <p className={styles.digit}>
          1250 <span>Rewards Point</span>
        </p>
        <img src='icon1.png' alt='icon' />
        <img src='icon2.png' alt='icon' />
        <img src='icon3.png' alt='icon' />
        <img src='icon4.png' alt='icon' />
        <img src='image 7.svg' alt='icon' className={styles.bgp} />
      </div>
      <div className={styles.card}>
        <span>Certafication</span>
        <FontAwesomeIcon icon={faEllipsis} className={styles.ficon} />
        <div className={styles.digit}>
          05
          <div className={styles.tag}>
            <FontAwesomeIcon icon={faArrowUp} />1 new in this month
          </div>
          <div className={styles.description}>Your Latest achievements</div>
        </div>
      </div>
      <div className={styles.card}>
        Learning Paths
        <span className={styles.digite}>23</span>
        <ul>
          <li>
            {' '}
            <FontAwesomeIcon icon={faCircle} />
            In progress
            <span>02</span>
          </li>
          <li>
            {' '}
            <FontAwesomeIcon icon={faCircle} />
            Completed
            <span>02</span>
          </li>
          <li>
            {' '}
            <FontAwesomeIcon icon={faCircle} />
            Yet to start
            <span>19</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
