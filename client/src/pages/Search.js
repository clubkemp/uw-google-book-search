import React, { useState, useEffect } from "react";

import API from "../utils/API";
import { List, ListItem } from "../components/List";
import Bookcard from "../components/Bookcard";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button, Box}  from 'react-bulma-components';
import { Form } from 'react-bulma-components'
const {Input, Field, Control, Label} = Form
function Search() {
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
        <Box>
          <form>
            <Field>
              <Label>Search for a book</Label>
              <Control>
                <Input
                onChange={handleInputChange}
                value={formObject.title}
                name="title"
                placeholder="Title (required)"
                />
              </Control>
            </Field>
            <Button color="primary" rounded outlined disabled={!formObject.title} onClick={handleFormSubmit}>
              Search
            </Button>
          </form>
        </Box>
          {googleBooks.map((book) => {
            // need to catch if any books don't have an other
            return (
              <Bookcard data={book} btn={saveOrDeleteBtn} />
            );
          })}
      </div>
    );
  }


export default Search;
