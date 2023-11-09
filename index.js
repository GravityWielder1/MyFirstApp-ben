const express = require('express')
const routes = require('./routes/index')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended:false}))

app.use((req, res, next) => {
	req.timestamp = new Date().toString()
	next()
})

app.use('/', routes)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hjs')

let port = process.env.PORT || 5001;
app.listen(port) //changed the port to 5001 as error appear saying unavailable
console.log(`Server running on http://localhost:${port}`)
