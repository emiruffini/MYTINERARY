import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Main from '../components/Main.js'
import Footer from '../components/Footer.js'
class Home extends React.Component{
    
    
    
    render(){
        return(
            <>
                <Navbar />
                <Hero />
                <Main />
                <Footer />
            </>
        )
    }
}
export default Home