import React from 'react';
import BookInfo from './book-info';
let BookContainer = (props) =>{
    return(
        <div className="book-container">
        <div className="book-img">
            <img src={props.book.imageLinks  ? props.book.imageLinks.thumbnail : "https://via.placeholder.com/250x200"} alt=""/>
        </div>
        <BookInfo book={props.book}/>
    </div>
    )
}
export default BookContainer;
