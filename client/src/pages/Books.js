import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import { set } from "mongoose";

function Books() {
  // Setting our component's initial state
  const [googleBooks, setGoogleBooks] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    
  }, [])

  // Deletes a book from the database with a given id, then reloads books from the db
  // function deleteBook(id) {
  //   API.deleteBook(id)
  //     .then(res => loadBooks())
  //     .catch(err => console.log(err));
  // }

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
      API.getBooks(formObject.title)
      .then(res =>{ 
        const books = res.data.map(e=>{
          console.log(e)
          const book = {
            title:e.volumeInfo.title, 
            authors:e.volumeInfo.authors, 
            desc:e.volumeInfo.description, 
            image:e.volumeInfo.imageLinks.thumbnail, 
            link:e.selfLink
          }
          return book
        })
        console.log(books)
        setGoogleBooks(books)
      })
      .catch(err => console.log(err));
    }
  };

    return (
            <div>
              <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <FormBtn
                disabled={!formObject.title}
                onClick={handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
              <List>
                {googleBooks.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    {/* <DeleteBtn onClick={() => deleteBook(book._id)} /> */}
                  </ListItem>
                ))}
              </List>
            </div>
            
            )
  }


export default Books;
