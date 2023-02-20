const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.set('views', './templates')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', { name: "Alex", id: 4 })
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/blog', (req, res) => {
    res.render('blog')
})

let port = 3001
app.listen(port, () => {
    console.log(`Server has been started: http://localhost:${port}`)
})