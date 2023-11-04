const express = require('express'); 
const router = express.Router();
const BOOK = require('../models/book');

router.post('/', async (req, res) => {
    try{
        const {title, author, publishYear} = req.body;
        if(!title || !author || !publishYear){
            return res.status(400).json(
                {
                    message: "Please fill all required field",
                }
            );
        }

        const book = await new BOOK({
            title,
            author,
            publishYear,
        }).save();

        res.status(201).json(
            {
                message: "Book created successfully",
                book,
            }
        );

    }
    catch(error){
        res.status(500).json(
            {
                message: error.message,
            }
        );
    }
});


router.get('/', async (req, res) => {
    try{
        const books = await BOOK.find();

        if(books.length === 0){
            res.json(
                {
                    message: "No Books Found",
                }
            );
        }

        res.json(
            {
                message: "All Books",
                count : books.length,
                books,
            }
        );
    }
    catch(error){
        res.status(500).json(
            {
                message: error.message,
            }
        );
    }
});


router.get('/:id', async (req, res) => {
    try{
        const book = await BOOK.findById(req.params.id);

        if(!book){
            return res.status(404).json(
                {
                    message: "Book not found",
                }
            );
        }

        res.json(
            {
                message: "Book Found",
                book,
            }
        );
    }
    catch(error){
        res.status(500).json(
            {
                message: error.message,
            }
        );
    }
});


router.put('/:id', async (req, res) => {
    try{
        const {title, author, publishYear} = req.body;
        if(!title || !author || !publishYear){
            return res.status(400).json(
                {
                    message: "Please fill all required field",
                }
            );
        }

        const book = await BOOK.findByIdAndUpdate(
            req.params.id,
            {
                title,
                author,
                publishYear,
            },
            {
                new: true,
            }
        );

        if(!book){
            return res.status(404).json(
                {
                    message: "Book not found",
                }
            );
        }

        res.json(
            {
                message: "Book updated successfully",
                book,
            }
        );
    }
    catch(error){
        res.status(500).json(
            {
                message: error.message,
            }
        );
    }
});


router.delete('/:id', async (req, res) => {
    try{
        const book = await BOOK.findByIdAndDelete(req.params.id);

        if(!book){
            return res.status(404).json(
                {
                    message: "Book not found",
                }
            );
        }

        res.json(
            {
                message: "Book deleted successfully",
                book,
            }
        );
    }
    catch(error){
        res.status(500).json(
            {
                message: error.message,
            }
        );
    }
});


module.exports = router;