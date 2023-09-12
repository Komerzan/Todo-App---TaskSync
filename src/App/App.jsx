import React from 'react'
import  styles from './App.module.scss'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'

function App() {

  return (
    <div className={styles.app}>
     <div className={styles.app_wrapper}>
    <Header/>
    <Main/>
    <Footer/>
    </div>
    </div>
  )
}

export default App
