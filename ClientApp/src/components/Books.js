import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Books extends Component {
  componentDidMount() {
    // This method is called when the component is first added to the document
    this.ensureBooksFetched();
  }

  componentDidUpdate() {
    // console.log('update called');
    // This method is called when the route parameters change
    this.ensureBooksFetched();
  }

  ensureBooksFetched() {
    const { requestBooks } = this.props;
    requestBooks();
  }

  renderBooksTable() {
    const { books } = this.props;

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id}>
              <td>{book.bookName}</td>
              <td>{book.price}</td>
              <td>{book.category}</td>
              <td>{book.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  render() {
    const { isLoading } = this.props;
    return (
      <div>
        <h1>Books</h1>
        <p>
          This component demonstrates fetching data from the
          server and working with URL parameters.
        </p>
        {isLoading ? <span>Loading...</span> : []}
        {!isLoading ? this.renderBooksTable() : []}
      </div>
    );
  }
}

Books.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    bookName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  })).isRequired,
  requestBooks: PropTypes.func.isRequired,
};
