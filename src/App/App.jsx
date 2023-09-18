import React from 'react'
import  styles from './App.module.scss'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'

function App() {

  return (
    <div className={styles.app}>
    <Header/>
    <Main/>
    <Footer/>
    </div>
  )
}

export default App
