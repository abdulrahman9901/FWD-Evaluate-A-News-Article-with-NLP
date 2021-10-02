const dotenv = require('dotenv')
const express = require('express')
const bodyParser=require("body-parser")
const cors=require("cors")
const path=require("path")
const mockAPIResponse = require('./mockAPI.js')
const axios =require("axios").default
const { text } = require('body-parser')

dotenv.config();

const PORT = 8081

const app = express()

app.use(express.static('dist'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
    origin:"*",
}))

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// a route that handling post request for new URL that coming from the frontend
console.log(`Your API key is ${process.env.API_KEY}`);
app.post('/add-url', function (req, res) {
    console.log(req.body)
    const articleURL=req.body.url
    axios.get(
        `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=en&of=json&url=${articleURL}`)
       
              // Print data
              .then(response => {
                  const data ={
                    score_tag : response.data.score_tag,
                    agreement : response.data.agreement,
                    subjectivity : response.data.subjectivity,
                    confidence : response.data.confidence,
                    irony : response.data.irony
                }
                 res.send(data)

              })      
              // Print error message if occur
              .catch(error => console.log(
                    'Error to fetch data\n'))
  })

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

// TODO: export app to use it in the unit testing
