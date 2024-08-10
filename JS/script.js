//Get the UI elements
let form = document.querySelector("#book-form");
let bookList = document.querySelector("#book-list");

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
  showAlert(message, className) {
    let div = document.querySelector(`.${className}`);
    div.innerText = message;
    div.style.display = "block";

    setTimeout(() => {
      div.style.display = "none";
    }, 2000);
  }
  removeFromBookList(target) {
    if (target.hasAttribute("href")) {
      if (confirm("Are you sure?")) {
        target.parentElement.parentElement.style.display = "none";
      }
    }
  }
}

//Add event listeners
form.addEventListener("submit", newBook);
bookList.addEventListener("click", removeBook);

//Define functions
function newBook(element) {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let isbn = document.querySelector("#isbn").value;

  let ui = new UI();

  if (title === "" || author === "" || isbn === "") {
    ui.showAlert("Please fill all the fields!", "error");
  } else {
    let book = new Book(title, author, isbn);

    ui.addToBookList(book);
    ui.clearField();
    ui.showAlert("Book Added Successfully", "success");
  }

  element.preventDefault();
}

function removeBook(e) {
  let ui = new UI();
  ui.removeFromBookList(e.target);
  ui.showAlert("Book Removed Successfully", "success");
}
