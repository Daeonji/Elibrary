import React, { useState, useEffect } from "react";
import Book from './Book'
function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books && books.map((book, i) => (
            <div key = {i}>
                <Book book = {book}/>
            </div>
        ))}
      </ul>
    </div>
  );
}

export default Books;