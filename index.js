import express from 'express'

const app = express()
const router = express.Router()
const port = +process.env.PORT || 8000
const dataUrl = 'https://mzwa1080.github.io/vue-exampleData/data/'
// use the middleware
app.use(router)



// use router
router.get('^/$|/ejd', (req,res)=>{
    res.json({
        status : res.statusCode,
        msg: 'You\'re home'
    })
})

router.get('/education',async  (req,res)=>{
//destructuring - you call the actual name in the data or function 
    let {education} = await (await fetch(dataUrl)).json()

    res.json({
        status : res.statusCode ,
        education
    })
})

app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`);
})