const express = require('express');
const superTest = require('supertest');

function testServer(route) {
    const app = express();
    app.use(express.json());
    app.use(route);
    return superTest(app);
}

module.exports = testServer;
