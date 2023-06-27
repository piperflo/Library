/*
//one way to create objects
const myObj = {
    property: 'Value!',
    otherProperty: 77,
    "function": function(){
        //function
    }
}
console.log(myObj.property);



//another way 
const playerOneName = "tim";
const playerTwoName = "jim";
const playerOneMarker = "X";
const playerTwoMarker = "O";

const playerOne = {
    name: "tim",
    mark: "X"
}

const playerTwo = {
    name: "jim",
    mark: "O"
}

//Another way
function Player(name, marker){
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
        console.log(name);
    }
}

const player = new Player('steve', 'X');
//console.log(player.name)


player.sayName();
function gameOver(winningPlayer){
    console.log("Congratulations");
    console.log(winningPlayer.name + " is the winner!");
}
*/
const modalForm = document.getElementById("modal-form");
const btn = document.getElementById("add-book-form");
const addBook = document.getElementById("add-book");
const books = document.getElementById("books");

let playerScore = 0;
var close = document.getElementsByClassName("close")[0];
let myLibrary = [];

function book(url, title, author, pages, read){
    console.log("Entered book");
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.url = url;
    if(read == "yes"){
        this.read = "Finished"
    }
    else{
        this.read = "Not Finished"
    }
    //console.log(title + " by " + author + ", " + pages + " pages, " + read);
    this.info = function(){
        return title + " by " + author + ", " + pages + " pages, " + this.read;
    }
}

function addBookToLibrary(event){
    event.preventDefault();
    console.log("Entered addBookToLibrary");
    //const container = document.querySelector('#books');
    var title = document.getElementById("input-title").value;
    var author = document.getElementById("input-author").value;
    var pages = document.getElementById("input-pages").value;
    var url = document.getElementById("image-url").value;
    console.log(title);
    console.log(author);
    console.log(pages);
    //const read = document.getElementById("yes-no");
    var read = "";
    if(document.getElementById('yes').checked) {     
        read += "Finished";
      }else {
        read += "Not Finished";
    }
    console.log(read);
    createBook(url, title, author, pages, read);
    const Book = new book(url, title, author, pages, read);
    myLibrary.push(Book);
    //event.preventDefault();
}

function createBook(url, title, author, pages, read){
    console.log("Entered createBook");
    const book = document.createElement('div');

    this.title = document.createElement('span');
    this.title.setAttribute('id', 'title');
    this.title.textContent = "Title: " + title;

    this.author = document.createElement('span');
    this.author.setAttribute('id', 'author');
    this.author.textContent = "Author: " + author;

    this.pages = document.createElement('span');
    this.pages.setAttribute('id', 'pages');
    this.pages.textContent = "Pages: " + pages;

    this.read = document.createElement('span');
    this.read.setAttribute('id', 'read');
    this.read.textContent = "Finished: " + read;

    this.url = document.createElement('img');
    this.url.setAttribute('id', 'url');
    this.url.src = url;

    book.setAttribute('class', 'book');
    book.appendChild(this.url);
    book.appendChild(this.title);
    book.appendChild(this.author);
    book.appendChild(this.pages);
    book.appendChild(this.read);
    books.appendChild(book);
}

btn.onclick = function() {
    modalForm.style.display = "flex";
}

close.onclick = function() {
    modalForm.style.display = "none";
}  

addBook.addEventListener("click", addBookToLibrary, false);


const harryPotter = new book("https://wallpapercave.com/wp/wp6289310.jpg", "Harry Potter and the sorcerer's stone", "J.K. Rowling", 309, "yes");
myLibrary.push(harryPotter);
//console.log(harryPotter.info());



myLibrary.forEach(function (book, index) {
    createBook(book.url, book.title, book.author, book.pages, book.read);
    console.log(book.info());
});
