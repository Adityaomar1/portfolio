import React from 'react'
import Hero from './sections/Hero.jsx'
import Button from './components/Button.jsx'
import ShowcaseSection from './sections/ShowcaseSection.jsx'
import NavBar from './components/Navbar.jsx'
import FeatureCards from './sections/FeatureCards.jsx'
import Experience from './sections/Experience.jsx'
import TechStack from './sections/TechStack.jsx'
import Contact from './sections/Contact.jsx'

const App = () => {
    return (
        <>
        <Hero />
        <ShowcaseSection />
        <NavBar />
        <FeatureCards />
        <Experience />
        <TechStack />
        <Contact />

        
        </>
    )
}


export default App