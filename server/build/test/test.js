"use strict";
const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const PostgresRepository = require("../repositories/PostgresRepository");
const { response } = require("express");
describe("Tasks api", () => {
    describe("get tasks", () => {
        it("It should get all the tasks", (done) => {
            chai.request(PostgresRepository)
                .get("http://localhost:3000/tasks")
                .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a("array");
                response.body.length.should.be.eq(2);
                done();
            });
        });
    });
});
