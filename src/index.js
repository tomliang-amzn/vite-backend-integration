const app = document.querySelector("#app");
const textNode = document.createElement("h2");
textNode.textContent = "List of books";
app.appendChild(textNode);

fetch('/api/books')
  .then(res => res.json())
  .then(bookObject => {
    const listNode = document.createElement("ul");
    const books = Object.values(bookObject);
    books.forEach(book => {
      const item = document.createElement("li");
      item.textContent = book;
      listNode.appendChild(item);
    });
    app.appendChild(listNode);
  });