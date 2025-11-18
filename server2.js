import { createServer } from 'http'
const PORT = process.env.PORT;

const users = [
    {id: 1, name: 'Emmanuel Adams', occupation: "Engineer"},
    {id: 2, name: 'Gaius Emmanuel', occupation: "Fullstack Developer"},
    {id: 3, name: "Amazing Emmanuel", occupation: "Writer"},
    {id: 4, name: "Dillion G. Emmanuel", occupation: "Professional Footballer"}
];

const server = createServer((req, res) => {
    if (req.url === '/api/users' && req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(users));
        res.end();
        } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
        const id = req.url.split('/')[3];
        const user = users.find((user) => user.id === parseInt(id));
        res.setHeader('Content-Type', 'application/json');
        if (user) {
            res.write(JSON.stringify(user));
        res.end();
        } else {
            res.statusCode = 404;
            res.write('User not found');
            res.end();
        }
        } else {
        res.setHeader('Content-Type', 'text/plain');
        res.statusCode = 404;
        res.write('NOT FOUND');
        res.end();
    }
         
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});