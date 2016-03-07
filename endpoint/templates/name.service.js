'use strict';

var _ = require('lodash');<% if (filters.mongoose) { %>
var Q = require('q');
var <%= classedName %> = require('./<%= name %>.model');<% } %>

exports.index = index;
exports.show = show;
exports.create = create;
exports.update = update;
exports.destroy = destroy;

// Get list of <%= name %>
function index() {<% if (!filters.mongoose) { %>
  res.json([]);<% } %><% if (filters.mongoose) { %>
  var deferred = Q.defer();

  <%= classedName %>.find({}, function (err, <%= name %>s) {
    if(err) return deferred.reject(err);
     deferred.resolve(<%= name %>s);
  });
  return deferred.promise;<% } %>
};<% if (filters.mongoose) { %>

// Get a single <%= name %>
function show(id) {
  var deferred = Q.defer();

  <%= classedName %>.findById(id, function (err, <%= name %>) {
    if(err) return deferred.reject(err);
    if (!<%= name %>) return deferred.reject(
      Error.new({
        code: 'NOT_FOUND',
        message: '<%= classedName %>: ' + id + ' is not found.'
      })
    );
    deferred.resolve(<%= name %>);
  });
  return deferred.promise;
};

// Creates a new <%= name %> in the DB.
function create(params) {
  var deferred = Q.defer();

  <%= classedName %>.create(params, function (err, <%= name %>) {
    if(err) return deferred.reject(err);
    deferred.resolve(<%= name %>);
  });
  return deferred.promise;
};

// Updates an existing <%= name %> in the DB.
function update(id, params) {
  var deferred = Q.defer();

  <%= classedName %>.findById(id, function (err, <%= name %>) {
    if(err) return deferred.reject(err);
    if (!<%= name %>) return deferred.reject(
      Error.new({
        code: 'NOT_FOUND',
        message: '<%= classedName %>: ' + id + ' is not found.'
      })
    );

    var updated = _.merge(<%= name %>, params);
    updated.save(function (err) {
      if (err) { return deferred.reject(err); }
      return deferred.resolve(<%= name %>);
    }); 
  });
  return deferred.promise;
};

// Deletes a <%= name %> from the DB.
function destroy(id) {
  var deferred = Q.defer();

  <%= classedName %>.findById(id, function (err, <%= name %>) {
    if(err) return deferred.reject(err);
    if (!<%= name %>) return deferred.reject(
      Error.new({
        code: 'NOT_FOUND',
        message: '<%= classedName %>: ' + id + ' is not found.'
      })
    );

    <%= name %>.remove(function(err) {
      if(err) { return deferred.reject(err); }
      return deferred.resolve(204);
    });
    
  });
  return deferred.promise;
};<% } %>