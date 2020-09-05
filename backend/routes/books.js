const {Router} = require("express");
const router = Router();

const book = require("../models/book")

router.get("/",async(req,res) =>{
    const books = await book.find();
    res.json(books);
});
router.post("/",async(req,res) =>{
    const {title, author, isbn} = req.body;
    const image = "/uploads/" + req.file.filename;
    const newBook = new book({title,author,isbn,image});
    await newBook.save()
    console.log(newBook)
    res.json({mesage: "book save"})
})
router.delete("/:id",async(req,res)=>{
    await book.findByIdAndDelete(req.params.id);
    //console.log(bookDelete);
    res.json({messge: "book deleting"});
})

module.exports = router;