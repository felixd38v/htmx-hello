import express from 'express';

const app = express();

// Set the static folder
app.use(express.static('public'));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended:true}));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.get('/users', (req, res) => {
    const users = [
        { id: 1, name: 'María Rodríguez' },
        { id: 2, name: 'Mariela Pérez' },
        { id: 3, name: 'Alberto Zurita'},
        ] 
        res.send(` 
            <h2>Users</h2>
            <ul class="list-group">
                ${users.map((user)=>`<li class="list-group-item">${user.name}</li>`).join('')} 
    </ul>
    `) });

// Start the server
app.listen(3000, ()=>{
    console.log('Server listening on port 3000')
})