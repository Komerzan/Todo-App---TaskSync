import React from 'react'
import  styles from './App.module.scss'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import NewList from '../Main/Lists/NewList/NewList'

function App() {

  return (
    <div className={styles.app}>
    <Header/>
    <Main/>
    <Footer/>
    <NewList/>
    </div>
  )
}

export default App
