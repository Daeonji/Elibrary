import React, { useState, useEffect } from "react";
import Book from './Book'

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/books?status=available")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Log the data received from the server
        setBooks(data);
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  return (
    <div>
      <h1>Available Books</h1>
      <ul>
        {books && books.map((book, i) => (
            <div key={i}>
                <Book book={book}/>
            </div>
        ))}
      </ul>
    </div>
  );
}

export default Books;
