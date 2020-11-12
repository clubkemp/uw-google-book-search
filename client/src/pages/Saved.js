import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Bookcard from "../components/Bookcard";
import { Button}  from 'react-bulma-components';


function Saved() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
    loadBooks();
    }, []);

    function loadBooks() {
    API.getBooks()
        .then((res) => setBooks(res.data))
        .catch((err) => console.log(err));
    }
    function handleDeleteBook(id) {
    API.deleteBook(id)
        .then((res) => loadBooks())
        .catch((err) => console.log(err));
    }
    function saveOrDeleteBtn (book){
        return <Button color="warning"onClick={e=>handleDeleteBook(book.g_id)}>unsave book</Button>
    }
    return (
    <div>
      {books.map((book) => {
        // need to catch if any books don't have an other
        return <Bookcard data={book} btn={saveOrDeleteBtn} />;
      })}
    </div>
  );
}

export default Saved;
