import React, { useState, useEffect } from "react";

import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { Input,FormBtn } from "../components/Form";

function Books() {
  // Setting our component's initial state
  const [googleBooks, setGoogleBooks] = useState([])
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject.title, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    setGoogleBooks([])
    if (formObject.title) {
      API.getGBooks(formObject.title)
      .then(res =>{ 
        const books = res.data.map(e=>{
          console.log(e)
          const book = {
            g_id:e.id,
            title:e.volumeInfo.title, 
            authors:e.volumeInfo.authors, 
            desc:e.volumeInfo.description, 
            image:e.volumeInfo.imageLinks.thumbnail, 
            link:e.volumeInfo.infoLink
          }
          return book
        })
        console.log(books)
        setGoogleBooks(books)
      })
      .catch(err => console.log(err));
    }
  };
  function saveOrDeleteBtn (book){

    const arr1 = books.map(e=>e.g_id)
    const filter = arr1.filter(e=> e===book.g_id)
    if(filter.length > 0){
      return <button onClick={e=>handleDeleteBook(book.g_id)}>unsave book</button> 
    }else{
      return <button onClick={e=>handleSaveBook(book)}>save book</button>
    }
  }
  function handleSaveBook(book){
    API.saveBook({
      g_id:book.g_id,
      title:book.title, 
      authors:book.authors, 
      desc:book.desc, 
      image:book.image, 
      link:book.link})
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }
  // Deletes a book from the database with a given id, then reloads books from the db
  function handleDeleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

    return (
      <div>
        <form>
          <Input
            onChange={handleInputChange}
            name="title"
            placeholder="Title (required)"
          />
          <FormBtn disabled={!formObject.title} onClick={handleFormSubmit}>
            Submit Book
          </FormBtn>
        </form>
        <List>
          {googleBooks.map((book) => {
            return (
              <ListItem key={book.g_id}>
                  <div>
                    <img src={book.image} />
                  </div>
                  <strong>{book.title}</strong><span> by {book.authors.join(", ")}</span> 
                  <p>{book.desc}</p>
                  <div>
                  <button onClick={e=>window.open(book.link, "_blank")}>View</button>
                    {saveOrDeleteBtn(book)}
                  </div>
                
              </ListItem>
            );
          })}
        </List>
      </div>
    );
  }


export default Books;
