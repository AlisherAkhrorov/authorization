const client = require('./settings')

const addUser = async (req, res) => {
    const users = req.body
    try {
        await client.connect();
        await client.query('INSERT INTO "user" (id,email,username,password) values ($1,$2,$3,$4)', [users.id, users.email, users.username, users.password]);
        await client.end();
        console.log('here');
        res.send('Успешно зарегался ЕРКА')
    } catch (e) {
        console.log(e);
    }
}

const signIn = async (req, res) => {
    const users = req.body;
    try {
        if (users.email == email) {
            console.log('here');
        }

    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    addUser,
    signIn
}