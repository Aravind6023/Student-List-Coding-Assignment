import express from 'express';
const app = express();
const port = 3200;
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.listen(port, () => {
    console.log(`Connected successfully on port ${port}`);
});
//# sourceMappingURL=index.js.map