import React from 'react';
import { Link } from 'react-router-dom';

let Book = (props) =>{
    return(
        <div className="book">
            <div className="book-img">
                <img src={props.book.volumeInfo.imageLinks ? props.book.volumeInfo.imageLinks.thumbnail : "https://via.placeholder.com/250x200"} alt=""/>
            </div>
            <div className="book-info">
                <div className="book-title">
                     {props.book.volumeInfo.title}
                </div>
                <div className="book-author">
                    <p>By <em>{props.book.volumeInfo.authors}</em></p>
                </div>
                <div className="book-call-to-action">
                    <Link to={"/book/"+ props.book.id} className="btn btn-highlight">Detail</Link>
                </div>
            </div>
        </div>
    )
}
export default Book;