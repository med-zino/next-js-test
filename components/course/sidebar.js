/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './sidebar.module.sass'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheck,
  faChevronDown,
  faCirclePlay,
  faPaperclip,
  faFileLines,
  faLock,
} from '@fortawesome/free-solid-svg-icons'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'

import 'react-accessible-accordion/dist/fancy-example.css'

export default function sidebar() {
  return (
    <div className={styles.main}>
      <div className={styles.progress_state}>
        25% Completed
        <img src='/green.svg' alt='certaficate' />
      </div>
      <ProgressBar now={25} className={styles.Progressbar} />
      <div className={styles.tabs}>
        <button className={styles.active}>My Learning</button>
        <button>Activities 01</button>
      </div>
      <div className={styles.welcome}>
        <img src='/flags.svg' alt='certaficate' />
        Welcome Page
        <FontAwesomeIcon icon={faCheck} />
      </div>

      <div className={styles.acc}>
        <Accordion allowMultipleExpanded className={styles.accordion2}>
          <AccordionItem className={styles.accordion__item2}>
            <AccordionItemHeading>
              <AccordionItemButton className={styles.accordion__button2}>
                Getting Started
                <FontAwesomeIcon icon={faChevronDown} />
                <p>4 lectures . 12 min</p>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className={styles.accordion__panel2}>
              <ul className={styles.accordion__list2}>
                <li className={styles.activeli}>
                  <FontAwesomeIcon icon={faCirclePlay} /> What is webflow ?
                  <FontAwesomeIcon icon={faCheck} className={styles.svgstae} />
                  <span>07:06</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faFileLines} /> Sign up with Webflow
                  <FontAwesomeIcon icon={faCheck} className={styles.svgstae} />
                  <span>07:06</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faCirclePlay} /> Webflow Teaser
                  <FontAwesomeIcon icon={faCheck} className={styles.svgstae} />
                  <span>07:06</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faFileLines} /> Boockmark The Ressource
                  <FontAwesomeIcon
                    icon={faPaperclip}
                    className={styles.svgstaee}
                  />
                  <FontAwesomeIcon icon={faLock} className={styles.svgstaee} />
                  <span>07:06</span>
                </li>
              </ul>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className={styles.accordion__item2}>
            <AccordionItemHeading>
              <AccordionItemButton className={styles.accordion__button2}>
                Secret of good design
                <FontAwesomeIcon icon={faChevronDown} />
                <p>4 lectures . 12 min</p>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className={styles.accordion__panel2}>
              <ul className={styles.accordion__list2}>
                <li>
                  <FontAwesomeIcon icon={faCirclePlay} /> What is webflow ?
                  <FontAwesomeIcon icon={faLock} className={styles.svgstaee} />
                  <span>07:06</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faCirclePlay} /> Sign up with Webflow
                  <FontAwesomeIcon icon={faLock} className={styles.svgstaee} />
                  <span>07:06</span>
                </li>
              </ul>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className={styles.accordion__item2}>
            <AccordionItemHeading>
              <AccordionItemButton className={styles.accordion__button2}>
                Laout is king
                <FontAwesomeIcon icon={faChevronDown} />
                <p>4 lectures . 12 min</p>
              </AccordionItemButton>
            </AccordionItemHeading>
          </AccordionItem>
          <AccordionItem className={styles.accordion__item2}>
            <AccordionItemHeading>
              <AccordionItemButton className={styles.accordion__button2}>
                How To Use Typography
                <FontAwesomeIcon icon={faChevronDown} />
                <p>4 lectures . 12 min</p>
              </AccordionItemButton>
            </AccordionItemHeading>
          </AccordionItem>
        </Accordion>
      </div>
      <div className={styles.certafication}>
        <img src='/hat.svg' />
        Certafication
        <FontAwesomeIcon icon={faLock} />
      </div>
    </div>
  )
}
