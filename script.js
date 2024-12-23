


const myLibrary = []

function Book(title, author, pages, read){
    this.title = title;
    this.author =author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
    }

}
function addBookToLibrary(title, author, pages, read){

    //obtain data to create a book then add to library
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayLibrary(){
    

    for (let i = 0; i < myLibrary.length; i++){
        //loop through myLibrary and should display array
        const newBook = document.createElement('div');
        newBook.classList.add('card');

        const card_title = document.createElement('div');
        card_title.classList.add('card-title');
        card_title.textContent = `Title: ${myLibrary[i].title}`

        const card_author = document.createElement('div');
        card_author.classList.add('card-author');
        card_author.textContent = `Author: ${myLibrary[i].author}`

        const card_page = document.createElement('div');
        card_page.classList.add('card-page');
        card_page.textContent = `Pages: ${myLibrary[i].pages}`

        const card_read = document.createElement('div');
        card_read.classList.add('card-read');
        card_read.textContent = `Read: ${myLibrary[i].read}`

        newBook.appendChild(card_title);
        newBook.appendChild(card_author);
        newBook.appendChild(card_page);
        newBook.appendChild(card_read);

        card_container.appendChild(newBook)

    }

}


const book1 = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not yet read");
const book2 = new Book("Harry Potter", "J.K Rowling", "400", "not yet read");
const book3 = new Book("Twilight", "Stephenie Meyer", "200", "not yet read");

const card_container = document.querySelector('.card-container');


myLibrary.push(book1)
myLibrary.push(book2)
myLibrary.push(book3)

console.log(myLibrary)

displayLibrary();

