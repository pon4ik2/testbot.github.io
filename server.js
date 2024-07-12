const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

let count = 0;

// Загрузка значения счетчика из файла при старте сервера
if (fs.existsSync('count.txt')) {
    const data = fs.readFileSync('count.txt', 'utf8');
    count = parseInt(data, 10) || 0;
}

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/counter', (req, res) => {
    res.json({ count });
});

app.post('/increment', (req, res) => {
    count++;
    fs.writeFileSync('count.txt', count.toString());
    res.json({ count });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
