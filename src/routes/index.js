const express = require('express');
const users = require('./userRoute.js');
const articles = require('./articleRoute.js');
const notices = require('./noticeRoute.js');
const comments = require('./commentRoute.js');

module.exports = (app) => {
  app.use(express.json(), users, articles, notices, comments);
};
