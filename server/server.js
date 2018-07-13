const path = require('path')

const public = path.join(__dirname, '../public')


const express = require('express')


const app = express()


app.use(express.static(public))





app.listen(process.env.PORT || 5000, ()=> {

	  console.log('Running')
})