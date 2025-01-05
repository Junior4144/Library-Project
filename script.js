


const myLibrary = []

class Book {

    constructor(title, author, pages, read, index){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.index = index;
        this.status = "Mark As Read";
    }
   
    info() {
        return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
    }

}
function addBookToLibrary(title, author, pages, read){

    //obtain data to create a book then add to library
    const newBook = new Book(title, author, pages, read);
    newBook.index = myLibrary.length;
    myLibrary.push(newBook);
}

function displayLibrary(){
    card_container.innerHTML = '';

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
        card_read.textContent = `Read: ${myLibrary[i].read}`;

        const card_finish_btn = document.createElement('button');
        card_finish_btn.classList.add('finish-card-btn');
        card_finish_btn.textContent = `${myLibrary[i].status}`;

        const remove_btn = document.createElement('button');
        remove_btn.classList.add('remove-card-btn');
        remove_btn.textContent = `Remove Card`;

        card_finish_btn.addEventListener('click', () =>{
            if (myLibrary[i].status == "Mark As Read"){

                myLibrary[i].status = "Mark As Not Read";
                myLibrary[i].read = "Has Been Read";

            } else{
                myLibrary[i].status = "Mark As Read";
                myLibrary[i].read = "Not Yet Read";
            }
          
            displayLibrary();
        });

        remove_btn.addEventListener('click', () =>{
            myLibrary.splice(i, 1);
            console.log(myLibrary)
            displayLibrary();
        });

        newBook.appendChild(card_title);
        newBook.appendChild(card_author);
        newBook.appendChild(card_page);
        newBook.appendChild(card_read);
        newBook.appendChild(card_finish_btn);
        newBook.appendChild(remove_btn);

        card_container.appendChild(newBook);

    }

}
function removeCardFromLibrary(){

}


const book1 = new Book("The Hobbit", "J.R.R. Tolkien", "295", "Not Yet Read", 0);
const book2 = new Book("Harry Potter", "J.K Rowling", "400", "Not Yet Read", 1);
const book3 = new Book("Twilight", "Stephenie Meyer", "200", "Not Yet Read", 2);

const card_container = document.querySelector('.card-container');
const remove_card_btn = document.querySelector('.remove-card-btn');


myLibrary.push(book1)
myLibrary.push(book2)
myLibrary.push(book3)


displayLibrary();

const addBook_button = document.querySelector('.addBook');
const form_container = document.querySelector('.form-container')
const submit_btn = document.querySelector('.submit-btn')


addBook_button.addEventListener('click', () => {
    //make appear a form container to fill out obtain new book info
    addBook_button.style.display = 'none'
    form_container.style.display = 'block'


});

const form = document.querySelector("form");
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');


function showTitleError(){
    const titleError = document.querySelector('#title + span.error')

    if(title.validity.valid){
        titleError.className = "error"
        titleError.textContent = "";
    }
    else{

        if (title.validity.valueMissing){
            titleError.textContent = "Title is missing"
            
        }
        titleError.className = "error active"
    }

}
function showAuthorError(){
    const authorError = document.querySelector('#author + span.error')

    if(author.validity.valid){
        authorError.className = "error"
        authorError.textContent = "";
    }
    else{

        if (author.validity.valueMissing){
            authorError.textContent = "Author is missing"
            
        }
        authorError.className = "error active"
    }

}
function showPagesError(){
    const pageError = document.querySelector('#pages + span.error')

    if(pages.validity.valid){
        pageError.className = "error"
        pageError.textContent = "";
    }
    else{

        if (pages.validity.valueMissing){
            pageError.textContent = "Pages is missing"
            
        }
        else if(pages.validity.patternMismatch){
            pageError.textContent = "Format incorrect"
        }
        pageError.className = "error active"
    }

}
function showReadError(){
    const readError = document.querySelector('#read + span.error')

    if(read.validity.valid){
        readError.className = "error"
        readError.textContent = "";
    }
    else{

        if (read.validity.valueMissing){
            readError.textContent = "Read is missing"
            
        }
        readError.className = "error active"
    }

}


form.addEventListener('submit', (event) =>{

    if(!title.validity.valid){
        showTitleError();
        event.preventDefault();
    }
    if(!author.validity.valid){
        showAuthorError();
        event.preventDefault();
    }

    if(!pages.validity.valid){
        showPagesError();
        event.preventDefault();
    }

    if(!read.validity.valid){
        showReadError();
        event.preventDefault();
    }
    if( title.validity.valid &&
        author.validity.valid &&
        pages.validity.valid &&
        read.validity.valid){
            
            event.preventDefault();
            const addBook_button = document.querySelector('.addBook');
            const form_container = document.querySelector('.form-container')
        
        
            form_container.style.display = 'none';
        
            addBook_button.style.display = 'inline-block';
        
            const title = document.getElementById("title");
            const currentTitle = title.value;
            title.value = '';
        
            const author = document.getElementById("author");
            const currentAuthor = author.value;
            author.value = '';
        
            const pages = document.getElementById("pages");
            const currentPages = pages.value;
            pages.value = '';
        
            const read = document.getElementById("read");
            const currentRead = read.value;
            read.value = '';
        
            addBookToLibrary(currentTitle, currentAuthor, currentPages, currentRead);
            displayLibrary();
        }



});


title.addEventListener('input', () =>{

    showTitleError();
    
})

author.addEventListener('input', () =>{

    showAuthorError();
    
})

pages.addEventListener('input', () =>{

    showPagesError();
    
})

read.addEventListener('input', () =>{

    showReadError();
    
})

