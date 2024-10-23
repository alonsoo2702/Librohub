import React, { useState, useEffect } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

const BookForm = ({ show, handleClose, handleSave, bookToEdit }) => {
  const [book, setBook] = useState({
    isbn: '',
    title: '',
    author: '',
    price: '',
    category: '',
    description: ''
  });

  useEffect(() => {
    if (bookToEdit) {
      setBook(bookToEdit);
    }
  }, [bookToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(book);
    handleClose();
    setBook({
      isbn: '',
      title: '',
      author: '',
      price: '',
      category: '',
      description: ''
    });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{bookToEdit ? 'Editar Libro' : 'Nuevo Libro'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>ISBN</Form.Label>
            <Form.Control
              type="text"
              value={book.isbn}
              onChange={(e) => setBook({...book, isbn: e.target.value})}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              value={book.title}
              onChange={(e) => setBook({...book, title: e.target.value})}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Autor</Form.Label>
            <Form.Control
              type="text"
              value={book.author}
              onChange={(e) => setBook({...book, author: e.target.value})}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              value={book.price}
              onChange={(e) => setBook({...book, price: e.target.value})}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Categoría</Form.Label>
            <Form.Control
              type="text"
              value={book.category}
              onChange={(e) => setBook({...book, category: e.target.value})}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={book.description}
              onChange={(e) => setBook({...book, description: e.target.value})}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default BookForm;
