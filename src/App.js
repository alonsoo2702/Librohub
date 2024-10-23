import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import { BinaryTree } from './utils/BinaryTree';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [bookToEdit, setBookToEdit] = useState(null);
  const [binaryTree] = useState(new BinaryTree());
  const [books, setBooks] = useState([]);

  const handleShowForm = () => {
    setBookToEdit(null);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setBookToEdit(null);
  };

  const handleSave = (book) => {
    if (bookToEdit) {
      binaryTree.delete(bookToEdit.isbn);
    }
    binaryTree.insert(book);
    setBooks(binaryTree.inOrderTraversal());
  };

  const handleEdit = (book) => {
    setBookToEdit(book);
    setShowForm(true);
  };

  const handleDelete = (isbn) => {
    binaryTree.delete(isbn);
    setBooks(binaryTree.inOrderTraversal());
  };

  return (
    <>
      <NavBar />
      <Container className="mt-4">
        <div className="d-flex justify-content-between mb-4">
          <h2>Catálogo de Libros</h2>
          <Button variant="primary" onClick={handleShowForm}>
            Nuevo Libro
          </Button>
        </div>
        <BookList
          books={books}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
        <BookForm
          show={showForm}
          handleClose={handleCloseForm}
          handleSave={handleSave}
          bookToEdit={bookToEdit}
        />
      </Container>
    </>
  );
}

export default App;
