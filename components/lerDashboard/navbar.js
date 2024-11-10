import React from 'react'
import styles from './navbar.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMagnifyingGlass,
  faBell,
  faCircleUser,
} from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <p>Welcome back , zino</p>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <FontAwesomeIcon icon={faBell} />
      <FontAwesomeIcon icon={faCircleUser} />
    </div>
  )
}
