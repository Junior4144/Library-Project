


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
function addBookToLibrary(){

    //obtain data to create a book then add to library
    const newBook = new Book();
    myLibrary.push(newBook);
}

function displayLibrary(){

    for (let i = 0; i < myLibrary.length; i++){
        //loop through myLibrary and should display array
        console.log(myLibrary[i])
    }
}


const book1 = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not yet read");
const book2 = new Book("Harry Potter", "J.K Rowling", "400", "not yet read");
const book3 = new Book("Twilight", "Stephenie Meyer", "200", "not yet read");

myLibrary.push(book1)
myLibrary.push(book2)
myLibrary.push(book3)

console.log(myLibrary)

