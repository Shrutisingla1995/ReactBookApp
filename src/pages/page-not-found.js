import React from 'react';
import Header from '../components/header/header';
import Footer from '../footer/footer';
let PageNotFound = () =>{
    return(
        <div>
            <Header/>
            <section id="page-not-found">
                <div className="container">
                    <h1>Page not found</h1>
                </div>
            </section>
            <Footer/>
        </div>
       
    )
}
export default PageNotFound;