import React, { useState, useEffect } from "react";
import Book from "./Book";
import { useParams } from "react-router-dom";

function Search() {
  const [books, setBooks] = useState([]);
  const searchQuery = useParams().searchQuery;

  useEffect(() => {
    if (searchQuery) {
      const searchUrl = `http://localhost:3000/books/search?title=${searchQuery}`;
      fetch(searchUrl, { method: "POST" })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((data) => setBooks(data))
        .catch((error) => console.error("Error fetching books:", error));
    }
  }, [searchQuery]);

  return (
    <div>
      <h1>Here are all the books with the name "{searchQuery}":</h1>
      {books.length === 0 ? (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50vh" }}>
            <h2>No books found with title "{searchQuery}"</h2>
        </div>
      ) : (
        <ul>
          {books.map((book, i) => (
            <div key={i}>
              <Book book={book} />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
