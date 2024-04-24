import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@mui/material";
import pic from "..//src//images/library2.jpg";

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
                left: "15%",
                transform: "translate(-50%, -50%)",
                color: "white",
            }}
        >
            <div>
                <h1>CHECK IN:</h1>
            </div>
        </div>
    </div>
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
            <h4>Thank you for checking in {book.title}</h4>
          </>
        )}
      </div>
    </>
  );
}

export default Books;
