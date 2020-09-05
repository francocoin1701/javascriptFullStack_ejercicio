class BookSesrvice{
    constructor(){
        this.URI = "http://localhost:3000/api/books"
    }

    async getBooks(){
        const response = await fethch(this.URI);
        const books = await response.json();
        return Books;
    }
    async postBook(book){
        const res = await fetch(this.URI,{
            method: "POST",
            body: book
        })
        const data = await res.json()
        console.log(data)
    }
    async deleteBook(bookId){
        const res = await fetch(`${this.URI}/${bookId}`,{
            headers: {
                "Content-Type" : "application/json"
            },
            method: "DELETE"
        });
        const data = res.json();
        console.log(data)

    }

}
export default BookSesrvice;