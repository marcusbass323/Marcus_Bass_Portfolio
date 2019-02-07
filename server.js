const express = require('express')
const server = express();

server.use(express.json());

const PORT = 5000

server.post('api/register', (req, res) => {
    const user = req.body;
    db('users').insert(user)
        .then(id => {
            res.status(201).json({ id: ids[0] });
        }).catch(err => {
            res.status(500).send(err);
    })
})

server.listen(PORT, () => console.log(`running on port ${PORT}`))