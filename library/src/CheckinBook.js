import React from 'react';

function checkIn(bookId) {
  fetch(`http://localhost:3000/books/${bookId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      status: 'available',
      checkedoutby: '',
      duedate: ''
    }),
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error('Failed to check in the book');
    }
    // Handle successful check-in
    console.log('Book checked in successfully');
  })
  .catch((error) => {
    console.error('Error checking in the book:', error);
  });
}

export default checkIn;
