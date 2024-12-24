const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')

// routers
const apiUsers = require('./routers/api/users/users')

// middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())

app.use('/users', apiUsers)

app.listen(5000, () => console.log(`Server is running at http://localhost:5000`))