const express = require('express');
const session = require('express-session');
const varMiddleware = require('./middleware/variables');
const auth = require('./middleware/auth.js')
const serverRoutes = require('./routes/routes');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json())

app.use(serverRoutes)
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/express_backend', (req, res) => {
	res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

