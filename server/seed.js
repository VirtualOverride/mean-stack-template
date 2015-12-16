'use strict';

var Persons = require('./api/person/person.model');

Persons.find().remove(function(){ 
	Persons.create({
		"name": "Pedro"
	}, {
		"name": "Juan"
	});
});