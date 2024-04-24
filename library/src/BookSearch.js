import React, { useState, useEffect } from "react";
import Book from "./Book";
import { useParams } from "react-router-dom";
import pic from "..//src//images/library2.jpg";

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
    <>
    <div
        style={{
            position: "relative",
            textAlign: "left",
            marginBottom: "20px",
        }}
    >
        <img
            src={pic}
            alt="Library"
            style={{ width: "100%", height: "300px" }}
        />
        <div
            style={{
                position: "absolute",
                top: "50%",
                left: "20%",
                transform: "translate(-50%, -50%)",
                color: "white",
            }}
        >
            <div>
                <h1>BOOKS with the title "{searchQuery}":</h1>
            </div>
        </div>
    </div>
    <div>
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
    </>
  );
}

export default Search;
