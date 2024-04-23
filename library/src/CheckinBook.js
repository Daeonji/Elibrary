import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@mui/material";

function Books() {
  const [book, setBook] = useState(null);
  const [updated, setUpdated] = useState(false);
  const id = useParams().id;

  useEffect(() => {
    fetch(`http://localhost:3000/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data))
      .catch((error) => console.error("Error fetching book:", error));
  }, [id]);

  useEffect(() => {
    if (book && !updated) {
      updateBookStatus();
    }
  }, [book, updated]);

  const updateBookStatus = async () => {
    const updatedBook = {
      ...book,
      checkedoutby: "",
      duedate: "",
      status: "available",
    };

    try {
      const response = await fetch(`http://localhost:3000/books/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedBook),
      });

      if (!response.ok) {
        throw new Error("Failed to update book status");
      }

      setBook(updatedBook);
      setUpdated(true);
    } catch (error) {
      console.error("Error updating book status:", error);
    }
  };

  return (
    <>
      <h1>Book Details</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {book && (
          <>
            <h2>{book.title}</h2>
            <p>By: {book.author}</p>
            <p>Publisher: {book.publisher}</p>
            <p>ISBN: {book.isbn}</p>
            <p>Status: {book.status}</p>
            <Button LinkComponent={Link} to={`/books/checkout/${id}`}>
              Check Out
            </Button>
          </>
        )}
      </div>
    </>
  );
}

export default Books;
