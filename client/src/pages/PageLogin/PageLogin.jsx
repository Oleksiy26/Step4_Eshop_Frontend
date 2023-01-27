import React from 'react'
import { useSelector } from 'react-redux'
import Login from '../../components/Forms/Login'
import LoggedBlock from '../../components/LoggedBlock'
import Title from '../../components/Title'
import styles from './PageLogin.module.scss'

const PageLogin = () => {
  const token = useSelector(state => state.auth.token)
  return token ? (
    <LoggedBlock />
  ) : (
    <div className={styles.page}>
      <div className={styles.create}>
        <Title subtitle='Edit personal information' />
        <Login />
      </div>
    </div>
  )
}

export default PageLogin
