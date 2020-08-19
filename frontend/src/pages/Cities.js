import React from 'react'
import Navbar from '../components/Navbar'
import Ciudades from '../components/Ciudades'
import Footer from '../components/Footer.js'




class Cities extends React.Component{
    render(){
        return(
            <>
            <Navbar />
            <Ciudades />
            <Footer />       
            </>
        )

    }
}
export default Cities