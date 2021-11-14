const request = require("supertest");
const assert = require ("assert")
const app = require("../index");

describe("Post Factorial", () => {
    const data = {
      n: 4
    };
    it ("Positive number", (done) => {
        request(app)
        .post("/factorial")
        .send(data)
        .expect("Content-Type", /json/)
        .end((err, response) => {
            assert(response.body.n === 24);
            done();
            if (err) return done(err);
          });

    }).timeout(1000);

    
    it ("Negative number", (done) => {
      data.n = -4
      request(app)
      .post("/factorial")
      .send(data)
      .end((err, response) => {
          assert(response.body === "Unvalid numbers");
          done();
          if (err) return done(err);
        });

  }).timeout(1000);

  it ("Letter or String", (done) => {
    data.n = "a"
    request(app)
    .post("/factorial")
    .send(data)
    .end((err, response) => {
        assert(response.body === "Unvalid numbers");
        done();
        if (err) return done(err);
      });

}).timeout(1000);

});