const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');  
const bodyParser = require('body-parser');
require('./db');
const bookRoutes = require('./routes/book_routes');

app.use(cors());
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.json(
        {
            message: "Book Store API is working!"
        }
    );
});


app.use('/books', bookRoutes);


app.use((req, res, next) => {
    res.status(404).json(
        {
            message: "404 page Not Found"
        }
    )
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



