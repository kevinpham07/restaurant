const path = require('path')

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public/dist/public')));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/restaurantdb', { useNewUrlParser : true });

const ReviewSchema = new mongoose.Schema({
	name: { type: String, required: [true, "Name can not be blank"], minlength: [3, "Name must be at least 3 characters"]},
	stars: { type: String },
	review: { type: String }
})
var Review = mongoose.model('Review', ReviewSchema);

const RestaurantSchema = new mongoose.Schema({
	name: { type: String, required: [true, "Name can not be blank"], minlength: [3, "Name must be at least 3 characters"]},
	cuisine: { type: String, required: [true, "Price can not be blank"], minlength: [3, "Cuisine must be at least 3 characters"]},
	reviews: [ReviewSchema]
})
var Rest = mongoose.model('Restaurant', RestaurantSchema);

app.post('/restaurant', (req, res) => {
	var rest = new Rest();
	rest.name = req.body.name;
	rest.cuisine = req.body.cuisine;
	rest.save( (err, rest) => {
		if(err) {
			res.json(err);
		}
		else {
			res.json(rest);
		}
	})
})

app.get('/restaurant/:id', (req, res) => {
	Rest.findOne( { _id: req.params.id }, (err, rest) => {
		if(err) {
			res.json(err)
		}
		else {
			res.json(rest)
		}
	})
})

app.get('/restaurant', (req, res) => {
	Rest.find({}, (err, rest) => {
		if(err) {
			res.json(err);
		}
		else {
			res.json(rest);
		}
	})
})

app.put('/restaurant/:id/edit', (req, res) => {
	Rest.findOne({ _id: req.params.id }, (err, rest) => {
		if(err) {
			res.json(err)
		}
		else {
			rest.name = req.body.name
			rest.cuisine = req.body.cuisine
			rest.save((err, rest) => {
				if(err) {
					res.json(err)
				}
				else {
					res.json(rest)
				}
			})
		}
	})
})

app.post('/restaurant/:id', (req, res) => {
	var review = new Review();
	review.name = req.body.name
	review.stars = req.body.stars
	review.review = req.body.review
	review.save( (err, review) => {
		if(err) {
			res.json(err)
		}
		else {
			Rest.findOneAndUpdate({_id: req.params.id}, {$push: { reviews: review}}, (err, rest) => {
				if(err) {
					res.json(err)
				}
				else {
					res.json(rest)
				}
			})
		}
	})
})

app.delete('/restaurant/:id/delete', (req, res) => {
	Rest.findOneAndRemove({_id: req.params.id}, (err, rest) => {
		if(err) {
			res.json(err);
		}
		else {
			res.json(rest);
		}
	})
})

app.all("*", (req, res) => {
	res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(1337);