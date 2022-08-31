/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './right.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProgressBar from 'react-bootstrap/ProgressBar'

import {
  faArrowDown,
  faDotCircle,
  faArrowRight,
  faEllipsisV,
} from '@fortawesome/free-solid-svg-icons'

export default function right() {
  return (
    <div className={styles.main}>
      <p className={styles.title}>Calendar</p>
      <div className={styles.calendar}>
        <div className={styles.date}>
          09
          <span className={styles.month}>JUN</span>
        </div>
        <div className={styles.date}>
          09
          <span className={styles.month}>JUN</span>
        </div>
        <div className={styles.active}>
          09
          <span className={styles.month}>JUN</span>
        </div>
        <div className={styles.date}>
          09
          <span className={styles.month}>JUN</span>
        </div>
        <div className={styles.date}>
          09
          <span className={styles.month}>JUN</span>
        </div>
      </div>
      <div className={styles.activities}>
        Activities
        <span>
          Latest
          <FontAwesomeIcon icon={faArrowDown} />
        </span>
      </div>
      <ul>
        <li>
          <FontAwesomeIcon icon={faDotCircle} />
          <span className={styles.time}>Tuesday 12 Jan 2022</span>
          <p>Redesign Alwasaet website</p>
          <span className={styles.timed}>
            create simple landign page he ha...
          </span>
        </li>
        <li>
          <FontAwesomeIcon icon={faDotCircle} />
          <span className={styles.time}>Tuesday 12 Jan 2022</span>
          <p>Redesign Alwasaet website</p>
          <span className={styles.timed}>
            create simple landign page he ha...
          </span>
        </li>
        <li>
          <FontAwesomeIcon icon={faDotCircle} />

          <span className={styles.time}>Tuesday 12 Jan 2022</span>
          <p>Redesign Alwasaet website</p>
          <span className={styles.timed}>
            create simple landign page he ha...
          </span>
        </li>
      </ul>
      <div className={styles.todayact}>
        13 activities today
        <span>
          View all <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </div>
      <hr />
      <div className={styles.skills}>
        Skills
        <FontAwesomeIcon icon={faEllipsisV} />
        <ul>
          <li>
            <img src='/comicon.svg' alt='icon' />
            <div>
              Communication
              <span>50%</span>
              <ProgressBar now={50} className={styles.Progressbar} />
            </div>
          </li>
          <li className={styles.li2}>
            <img src='/jsicon.svg' alt='icon' />
            <div>
              Web Developement
              <span>50%</span>
              <ProgressBar
                now={50}
                variant='danger'
                className={styles.Progressbar}
                color='#851651'
              />
            </div>
          </li>
          <li className={styles.li3}>
            <img src='/writingicon.svg' alt='icon' />
            <div>
              Writing and Blogging
              <span>50%</span>
              <ProgressBar now={50} className={styles.Progressbar} />
            </div>
          </li>
          <li className={styles.li4}>
            <img src='/designicon.svg' alt='icon' />
            <div>
              Desiging and Coding
              <span>90%</span>
              <ProgressBar
                now={90}
                className={styles.Progressbar}
                variant='success'
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
