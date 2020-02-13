import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import BooksSectionPage from './pages/books-section';
import BooksDetailPage from './pages/books-detail';
import PageNotFound from './pages/page-not-found';

class App extends Component{
  render(){
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={BooksSectionPage} exact></Route>
            <Route path="/books/category/:categoryName" exact render={(props)=>
            {
              let categoryName = props.match.params.categoryName
              return <BooksSectionPage categoryName={categoryName}/>
            }}></Route>
            <Route path="/book/:bookID"  exact render={(props)=>
            {
              let bookId = props.match.params.bookID
              return <BooksDetailPage bookID={bookId}/>
            }}></Route>
            <Route path="" component={PageNotFound}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }

}

export default App;
