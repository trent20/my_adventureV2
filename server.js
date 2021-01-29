let express = require('express')
let path = require('path')
let app = express()

app.get('/', function(request, response){
    response.sendFile(
        path.join(__dirname,'AdventurePage.html')
        )
})

app.get('/investment', function (request, response) {
    response.sendFile (
        path.join(__dirname, 'invest.html')
    )
})

app.get('/business', function(request, response){
    response.sendFile(
        path.join(__dirname, 'Business.html')
        )
})

app.get('/jet', function(request, response){
    response.sendFile(
        path.join(__dirname, 'jet.html')
        )
})

app.get('/clothing', function(request, response){
    response.sendFile(
        path.join(__dirname, 'clothing.html')
        )
})

app.get('/yacht', function(request, response){
    response.sendFile(
        path.join(__dirname, 'yacht.html')
        )
})

app.get('/spend', function(request, response){
    response.sendFile(
        path.join(__dirname, 'Spend.html')
        )
})

app.get('/end', function(request, response){
    response.sendFile(
        path.join(__dirname, 'conclusion.html')
    )
})

app.use(express.static('./'))

app.listen(8080)
