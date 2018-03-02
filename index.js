const express = require('express')

const app = express()

app.set('view-engine', 'ejs')

app.get('/', (req, res) => res.render('home'))

app.post('/',(req, res) => {

console.log(req.body, req.files)

res.send('ok')

})

app.listen(3000, () => console.log('running...'))
