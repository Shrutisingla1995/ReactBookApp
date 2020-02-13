import React, { Component } from 'react';
import Header from '../components/header/header';
import Footer from '../footer/footer';
import BookDetail from '../components/book-detail/book-detail';
import axios from 'axios';
import Loader from '../loader';

 class BooksDetailPage extends Component{
     constructor(props){
         super(props);
         this.state={
            book:{},
            isLoading:true
         }
     }
     componentDidMount(){
         axios.get("https://www.googleapis.com/books/v1/volumes/" + this.props.bookID).then((response)=>{
             console.log(response)
            this.setState({
                book:response.data.volumeInfo,
                isLoading:false
            })
         })
     }
     render(){
        return(
            <div>
               <Header/>
               {this.state.isLoading ? 
               <Loader/> :
                <BookDetail book={this.state.book} bookID={this.props.bookID} />
               }
               <Footer/>
           </div>
       
        )
     }
  
 }
 export default BooksDetailPage;