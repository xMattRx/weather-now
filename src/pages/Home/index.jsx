import React from 'react'
import { Container, GenericContainer } from '../../components'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import MainHome from '../../components/MainHome'

export default function Home() {
  return (
    <GenericContainer>
        <Container>
            <Header />
              <MainHome />
            <Footer />
        </Container>
      </GenericContainer>
  )
}

