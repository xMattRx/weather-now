import React from 'react'
import { Container } from '../../components'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import MainHome from '../../components/MainHome'

export default function Home() {
  return (
    <div style={{
        display: "flex",
        justifyContent: "center"
      }}>
        <Container>
            <Header />
              <MainHome />
            <Footer />
        </Container>
      </div>
  )
}

