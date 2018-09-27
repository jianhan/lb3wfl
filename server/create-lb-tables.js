'use strict';

const server = require('./server');
const ds = server.dataSources.mongodb;
const lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role'];
ds.autoupdate(lbTables, (er) => {
  if (er) throw er;
  console.log('Tables [' + lbTables + '] created in ', ds.adapter.name);
  ds.disconnect();
});
