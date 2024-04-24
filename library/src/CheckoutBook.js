import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TextField, Button, FormLabel } from "@mui/material";
import pic from "..//src//images/library2.jpg";
function Books() {
  const [book, setBook] = useState(null);
  const [inputs, setInputs] = useState({ name: "", duedate: "" });
  const [submitted, setSubmitted] = useState(false);
  const id = useParams().id;

  useEffect(() => {
    fetch(`http://localhost:3000/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data))
      .catch((error) => console.error("Error fetching book:", error));
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedBook = {
      ...book,
      checkedoutby: inputs.name,
      duedate: inputs.duedate,
      status: "checked out",
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
      setSubmitted(true); // Set submitted to true after successful submission
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
                <h1>CHECK OUT:</h1>
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
          </>
        )}
        {!submitted ? ( // Render the form if not submitted
          <form onSubmit={handleSubmit}>
            <FormLabel>Name</FormLabel>
            <TextField
              value={inputs.name}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="name"
            />
            <FormLabel>Due Date</FormLabel>
            <TextField
              value={inputs.duedate}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="duedate"
            />
            <Button type="submit" variant="contained" color="secondary">
              Submit
            </Button>
          </form>
        ) : (
          // Render the thank you message if submitted
          <h3>
            Thank you for checking out {book.title} by {book.author}
          </h3>
        )}
      </div>
    </>
  );
}

export default Books;
