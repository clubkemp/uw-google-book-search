import React from "react";
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

function Saved() {
  return (
    <div>
      {googleBooks.map((book) => {
        // need to catch if any books don't have an other
        return <Bookcard data={book} btn={saveOrDeleteBtn} />;
      })}
    </div>
  );
}

export default Saved;
