import React from 'react';
let BookInfo = (props) =>{
    return(
        <div className="book-info">
        <div className="book-title">
            <h1>{props.book.title}</h1>
        </div>
        <div className="book-author">
            <h1>{props.book.publisher}</h1>
        </div>
        <div className="book-description">
            <p>{props.book.description}</p>
        </div>
    </div>
    )
} 
export default BookInfo;