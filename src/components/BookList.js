import React from 'react';
import { Table, Button } from 'react-bootstrap';

const BookList = ({ books, handleEdit, handleDelete }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ISBN</th>
          <th>Título</th>
          <th>Autor</th>
          <th>Precio</th>
          <th>Categoría</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.isbn}>
            <td>{book.isbn}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>${book.price}</td>
            <td>{book.category}</td>
            <td>
              <Button
                variant="info"
                size="sm"
                className="me-2"
                onClick={() => handleEdit(book)}
              >
                Editar
              </Button>
              <Button
                variant="danger"
                size="sm"
                onClick={() => handleDelete(book.isbn)}
              >
                Eliminar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default BookList;
