require("./style/app.css")
import BookService from "./service/bookService";



document.getElementById("book-form")
    .addEventListener("submit", e =>{
        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        console.log(author)
        const isbn = document.getElementById("isbn").value;
        const image = document.getElementById("image").files;

        const bookData = new FormData();
       
        bookData.append("title", title);
        bookData.append("author", author);
        bookData.append("isbn", isbn);
        bookData.append("image", image[0]);
        console.log(bookData.values)
        
        const bookService = new BookService();
        bookService.postBook(bookData);

        e.preventDefault();

})