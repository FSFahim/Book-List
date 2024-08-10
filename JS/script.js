//Get the UI elements
let form = document.querySelector("#book-form");

//Book Class
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

//UI Class
class UI {
  constructor() {}

  addToBookList(book) {
    let list = document.querySelector("#book-list");
    let row = document.createElement("tr");
    row.innerHTML = `<tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#">X</a></td>
    </tr>`;
    list.appendChild(row);
  }
  clearField() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
}

//Add event listeners
form.addEventListener("submit", newBook);

//Define functions
function newBook(element) {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let isbn = document.querySelector("#isbn").value;

  let book = new Book(title, author, isbn);

  let ui = new UI();
  ui.addToBookList(book);
  ui.clearField();

  element.preventDefault();
}
