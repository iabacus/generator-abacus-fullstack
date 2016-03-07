'use strict';

var <%= classedName %>Service = require('./<%= name %>.service');

exports.index = index;
exports.show = show;
exports.create = create;
exports.update = update;
exports.destroy = destroy;

// Get list of <%= name %>
function index(req, res) {
  <%= classedName %>Service
    .index()

    .then(function(<%= name %>s) {
      res.json(200, <%= name %>s);
    })
    .catch(function(err) {
      res.send(500, err);
    });
};

// Get a single <%= name %>
function show(req, res) {
  <%= classedName %>Service
    .show(req.params.id)

    .then(function(<%= name %>) {
      res.json(<%= name %>);
    })
    .catch(function(err) {
      if(err.code === 'NOT_FOUND') {
        return res.send(404);
      } 
      res.send(500, err);
    });
};

// Creates a new <%= name %> in the DB.
function create(req, res) {
  <%= classedName %>Service
    .create(req.body)

    .then(function(<%= name %>) {
      res.json(201, <%= name %>);
    })
    .catch(function(err) {
      res.send(500, err);
    });
};

// Updates an existing <%= name %> in the DB.
function update(req, res) {
  if(req.body._id) { delete req.body._id; }

  <%= classedName %>Service
    .update(req.params.id, req.body)

    .then(function(<%= name %>) {
      res.json(201, <%= name %>);
    })
    .catch(function(err) {
      if(err.code === 'NOT_FOUND') {
        return res.send(404);
      } 
      res.send(500, err);
    });
};

// Deletes a <%= name %> from the DB.
function destroy(req, res) {
  <%= classedName %>Service
    .destroy(req.params.id)

    .then(function(<%= name %>) {
      res.send(204);
    })
    .catch(function(err) {
      if(err.code === 'NOT_FOUND') {
        return res.send(404);
      } 
      res.send(500, err);
    });
};
