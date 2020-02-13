import React from 'react';
import BooksContainer from './books-container';
let BooksSection = (props) => {
    if(props.books.length === 0){
        return (
            <section id="books-section">
                <div className="container">
                    <div className="section-title">
                        <h1>{"No Books Found for " + props.title}</h1>
                    </div>
                </div>
            </section>
        )
    }else{
        return (
            <section id="books-section">
                <div className="container">
                    <div className="section-title">
                        <h1>{props.title + " Books"}</h1>
                        <BooksContainer books={props.books}/>
                    </div>
                </div>
            </section>
        )
    }
 
}
export default BooksSection;