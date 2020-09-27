const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const db = "mongodb+srv://dbOmar:thebestking12++@cluster0.zhwpl.mongodb.net/dbName?retryWrites=true&w=majority"
const User = require('../models/user')
mongoose.connect(db , { useNewUrlParser: true } ,err => {
	if(err){
		console.error('Error!'+ err)
	}else{
		console.log('Connected to mongodb')
	}
})

router.get('/',(req, res)=>{
	res.send('From API route')
})

router.get('/events', (req,res) => {
	let events = [
	  {
		"_id": "1",
		"name": "Auto Expo",
		"description": "lorem ipsum",
		"date": "2012-04-23T18:25:43.511Z"
	  },
	  {
		"_id": "2",
		"name": "Auto Expo",
		"description": "lorem ipsum",
		"date": "2012-04-23T18:25:43.511Z"
	  },
	  {
		"_id": "3",
		"name": "Auto Expo",
		"description": "lorem ipsum",
		"date": "2012-04-23T18:25:43.511Z"
	  },
	  {
		"_id": "4",
		"name": "Auto Expo",
		"description": "lorem ipsum",
		"date": "2012-04-23T18:25:43.511Z"
	  },
	  {
		"_id": "5",
		"name": "Auto Expo",
		"description": "lorem ipsum",
		"date": "2012-04-23T18:25:43.511Z"
	  },
	  {
		"_id": "6",
		"name": "Auto Expo",
		"description": "lorem ipsum",
		"date": "2012-04-23T18:25:43.511Z"
	  }
	]
	res.json(events)
  })
  
  router.get('/special', (req, res) => {
	let specialEvents = [
	  {
		"_id": "1",
		"name": "Auto Expo Special",
		"description": "lorem ipsum",
		"date": "2012-04-23T18:25:43.511Z"
	  },
	  {
		"_id": "2",
		"name": "Auto Expo Special",
		"description": "lorem ipsum",
		"date": "2012-04-23T18:25:43.511Z"
	  },
	  {
		"_id": "3",
		"name": "Auto Expo Special",
		"description": "lorem ipsum",
		"date": "2012-04-23T18:25:43.511Z"
	  },
	  {
		"_id": "4",
		"name": "Auto Expo Special",
		"description": "lorem ipsum",
		"date": "2012-04-23T18:25:43.511Z"
	  },
	  {
		"_id": "5",
		"name": "Auto Expo Special",
		"description": "lorem ipsum",
		"date": "2012-04-23T18:25:43.511Z"
	  },
	  {
		"_id": "6",
		"name": "Auto Expo Special",
		"description": "lorem ipsum",
		"date": "2012-04-23T18:25:43.511Z"
	  }
	]
	res.json(specialEvents)
  })


router.post('/register' , (req,res)=>{
	let userData = req.body;
	let user = new User(userData);
	user.save((error,registered) =>{
		if(error){
			console.log(error)
		}else{
			res.status(200).send(registered)
		}
	})
})

router.post('/login',(req,res)=>{
	let userData = req.body
	User.findOne({email:userData.email} ,(error,user) =>{
		if(error){
			console.log(error)
		}else{
			if(!user){
				res.status(401).send('Invalid email')
			}
			else {
				if(user.password != userData.password){
					res.status(401).send('Invalid password')
				}else{
					res.status(200).send(user)
				}
			}
		}
	})
})

module.exports = router
