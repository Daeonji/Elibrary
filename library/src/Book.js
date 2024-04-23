import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Book(props) {
  const { id, title, author, publisher, isbn, status, checkedoutby, duedate } =
    props.book;

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2>{title}</h2>
      <p>By: {author}</p>
      <p>Publisher: {publisher}</p>
      <p>ISBN: {isbn}</p>
      <p>Status: {status}</p>
      {status === "checked out" && (
        <>
          <p>Checked out by: {checkedoutby}</p>
          <p>Due Date: {duedate}</p>
          <Button LinkComponent={Link} to={`/books/checkin/${id}`}>
            Check In
          </Button>
        </>
      )}
      {status !== "checked out" && (
        <Button LinkComponent={Link} to={`/books/checkout/${id}`}>
          Check Out
        </Button>
      )}
    </div>
  );
}

export default Book;
