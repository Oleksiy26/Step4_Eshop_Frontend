import React from 'react'
import { Link } from 'react-router-dom'
import { useBreadCrumb } from '../../hooks/useBreadCrumb'
import PropTypes from 'prop-types'
import styles from './BreadCrumbs.module.scss'

const NavigatePanel = ({ startFrom }) => {
  const { navigate, pathNames, reNavigate } = useBreadCrumb()

  return (
    <div>
      <span
        style={{ cursor: 'pointer', textDecoration: 'none' }}
        onClick={reNavigate}
        className={styles.link_f}
      >
        {startFrom} <span className={styles.link_f_symbol}>&#9474;</span>
      </span>
      {pathNames.map((pathname, index) => {
        const routeTo = `/${pathNames.slice(0, index + 1).join('/')}`
        const isLast = index === pathNames.length - 1
        return isLast ? (
          <Link className={styles.link} key={pathname}>
            {' '}
            {pathname}{' '}
          </Link>
        ) : (
          <Link
            style={{ cursor: 'pointer' }}
            key={index}
            onClick={() => navigate(routeTo)}
            className={styles.link}
          >
            {pathname}
          </Link>
        )
      })}
    </div>
  )
}

NavigatePanel.defaultProps = {
  startFrom: 'Home'
}

NavigatePanel.propTypes = {
  startFrom: PropTypes.string.isRequired
}

export default NavigatePanel
