// require('dotenv').config();
const express = require('express')
const server = express()
const cors = require('cors');
// const cookieParser = require('cookie-parser');

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}

// server.use(cookieParser())
server.use(express.json())
server.use(express.urlencoded({
    extended: false
}))
// server.use(cors(corsOptions))
console.log(process.env)
const PORT = process.env.PORT || 9000
function main() {
    server.listen(PORT, () => console.log('server running at ', PORT))
    server.use('/api', require('./routes'))
}
main()