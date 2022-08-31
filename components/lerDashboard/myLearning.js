/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './mylearning.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowDown,
  faVideo,
  faClock,
} from '@fortawesome/free-solid-svg-icons'

import Badge from './badge'

export default function myLearning() {
  return (
    <div className={styles.main}>
      <p className={styles.title}>
        My Learning
        <span>
          filter <FontAwesomeIcon icon={faArrowDown} />{' '}
        </span>
      </p>
      <p className={styles.description}>
        Content every employee should complete
      </p>
      <div className={styles.container}>
        <div className={styles.element}>
          <img src='/image.svg' alt='course' />
          <Badge clr='#B42318' bg='#FEF3F2' content='Design' />
          <Badge clr='#344054' bg='#F2F4F7' content='Developement' />
          <p>Ultimate web Designer</p>
          <div className={styles.details}>
            <FontAwesomeIcon icon={faClock} />
            1h 30min
            <span>
              <FontAwesomeIcon icon={faVideo} />
              13 video
            </span>
          </div>
        </div>
        <div className={styles.element}>
          <img src='/image-1.svg' alt='course' />
          <Badge clr='#B42318' bg='#FEF3F2' content='Design' />
          <Badge clr='#B54708' bg='#FFFAEB' content='webflow' />
          <p>Figma To Webflow To Freelancing</p>
          <div className={styles.details}>
            <FontAwesomeIcon icon={faClock} />
            1h 30min
            <span>
              <FontAwesomeIcon icon={faVideo} />
              13 video
            </span>
          </div>
        </div>
        <div className={styles.element}>
          <img src='/image-2.svg' alt='course' />
          <Badge clr='#3538CD' bg='#EEF4FF' content='Adobe' />
          <Badge clr='#EFF8FF' bg='#175CD3' content='Figma' />
          <p>Learn Photoshop , Web Design & Profitable Freelancing 2022</p>
          <div className={styles.details}>
            <FontAwesomeIcon icon={faClock} />
            1h 30min
            <span>
              <FontAwesomeIcon icon={faVideo} />
              13 video
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
