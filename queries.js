var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config.js'),
	buildings = require('./listings.json');
	
mongoose.connect('mongodb://mrmaster3:A27WH!uP@ds123124.mlab.com:23124/assignment3', {config: { autoIndex: false }});
var findLibraryWest = function() {
	Listing.find({ code: 'LBW' }, function (err, listing) {
		if (err) throw err;
		console.log(listing);
	});
};

var removeCable = function() {
	Listing.find({ code : 'CABL' }, function(err, listing) {
		if (err) throw err;		
		Listing.remove(function(err) {
			if (err) throw err;
			console.log(listing);
		});
	});

};
var updatePhelpsLab = function() {
	Listing.findOneAndUpdate(
	{address: '701 N Broadway, Sleepy Hollow, NY 10591, United States' }, 
	{address: '1275 Center Drive, FL 32611, United States' }, 
	function(err, listing) {
		if (err) throw err;
		console.log(listing);
	}); 
};
var retrieveAllListings = function() {
	Listing.find({}, function (err, listings) {
		if (err) throw err;
		console.log(listings);
	});
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();


