'use strict';

var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config.js'),
	buildings = require('./listings.json');

mongoose.connect('mongodb://mrmaster3:A27WH!uP@ds123124.mlab.com:23124/assignment3', {config: { autoIndex: false }});

Listing.insertMany(buildings, function(err, docs) {});