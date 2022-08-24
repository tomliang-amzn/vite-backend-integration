import { useEffect, useState } from "react";

const App = () => {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    fetch("/api/books")
      .then((res) => res.json())
      .then((response) => {
        setBookList(response.data);
      });
  }, []);
  return (
    <div>
      <h2>List of books</h2>
      {bookList.length && (
        <ul>
          {bookList.map((book) => (
            <li key={book}>{book}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { App };
