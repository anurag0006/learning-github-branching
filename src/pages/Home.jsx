import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { Testimonials } from '../components/Testimonials'
import ContactForm from '../components/ContactForm'
import Card from '../components/CardComponent/Card'



const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Card/>
            <Testimonials />
            <ContactForm />
            <Footer />
        </>
    )
}

export default Home
