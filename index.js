const e = require('express');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
// const handler=(req,res)=>{
//     res.send('hello node')
// }
const cors = require('cors');


app.use(cors());

app.use(express.json());


const users = [
    { id: 0, name: 'dhabana', email: 'shabana@mai.com' },
    { id: 1, name: 'mhabana', email: 'shabana@mai.com' },
    { id: 2, name: 'lhabana', email: 'shabana@mai.com' },
    { id: 3, name: 'shabana', email: 'shabana@mai.com' },
    { id: 4, name: 'jaabana', email: 'shabana@mai.com' },
    { id: 5, name: 'rabana', email: 'shabana@mai.com' }
]

app.get('/', (req, res) => {
    res.send('hello I am learning node')
})

// use query patrameter
app.get('/users', (req, res) => {

    const search = (req.query.search);
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
})
// app method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);

})

app.get('/users', (req, res) => {
    res.send(users)
});

// dynamic api

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.listen(port, () => {
    console.log("listening port", port);
})