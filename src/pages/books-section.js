import React, { Component } from 'react';
import Header from '../components/header/header';
import Footer from '../footer/footer';
import BooksSection from '../components/books-section/books-section';
import axios from 'axios';
 class BooksSectionPage  extends Component{
     constructor(props){
         super(props);
         this.state={
             books:[],
             isLoading:false
         }
     }
     componentDidMount(){
         axios.get("https://www.googleapis.com/books/v1/volumes?q="+ this.props.categoryName).then((response)=>{
            this.setState({
                books: response.data.items
            })
            console.log(response.data.items)
        })
     }
     componentDidUpdate(previousProps){
         if(previousProps.categoryName != this.props.categoryName){
             this.setState({
                 isLoading:true
             })
            axios.get("https://www.googleapis.com/books/v1/volumes?q="+ this.props.categoryName).then((response)=>{
                this.setState({
                    books: response.data.items,
                    isLoading:false
                })
                console.log(response.data.items)
            })
         }else{
             
         }
     }
     render(){
        return(
            <div>
               <Header/>
                 {this.state.isLoading ? <p>is loading..</p> :  <BooksSection title={this.props.categoryName} books={this.state.books}/>}
               <Footer/>
            </div>
         
     
        )
     }
   
 }
 BooksSectionPage.defaultProps={
     categoryName : "HTML"
 }
 export default BooksSectionPage;