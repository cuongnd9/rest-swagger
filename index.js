require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const chalk = require('chalk')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')

const apiCatRoute = require('./api/routes/cat.route')

const app = express()

const port = process.env.PORT || 9000

// Connect MongoDB.
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true})

// Body Parser.
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Setup Swagger UI.
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// Routes.
app.use('/api/cats', apiCatRoute)

app.listen(port, () => 
	console.log(chalk.bgGreen(`app is running on port ${port}`))
)
