'use strict';

var _ = require('lodash');
var Person = require('./person.model');

function handleError (res, err) {
  return res.status(500).send(err);
}

/**
 * Get list of Person
 *
 * @param req
 * @param res
 */
exports.index = function (req, res) {
  Person.find(function (err, persons) {
    if (err) { return handleError(res, err); }
    return res.status(200).json(persons);
  });
};

/**
 * Get a single Person
 *
 * @param req
 * @param res
 */
exports.show = function (req, res) {
  Person.findById(req.params.id, function (err, person) {
    if (err) { return handleError(res, err); }
    if (!person) { return res.status(404).end(); }
    return res.status(200).json(person);
  });
};

/**
 * Creates a new Person in the DB.
 *
 * @param req
 * @param res
 */
exports.create = function (req, res) {
  Person.create(req.body, function (err, person) {
    if (err) { return handleError(res, err); }
    return res.status(201).json(person);
  });
};

/**
 * Updates an existing Person in the DB.
 *
 * @param req
 * @param res
 */
exports.update = function (req, res) {
  if (req.body._id) { delete req.body._id; }
  Person.findById(req.params.id, function (err, person) {
    if (err) { return handleError(res, err); }
    if (!person) { return res.status(404).end(); }
    var updated = _.merge(person, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(person);
    });
  });
};

/**
 * Deletes a Person from the DB.
 *
 * @param req
 * @param res
 */
exports.destroy = function (req, res) {
  Person.findById(req.params.id, function (err, person) {
    if (err) { return handleError(res, err); }
    if (!person) { return res.status(404).end(); }
    person.remove(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(204).end();
    });
  });
};
