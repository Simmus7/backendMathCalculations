const request = require("supertest");
const assert = require ("assert")
const app = require("../index");

describe("Post Rectangle", () => {
    const data = {
        large : 5,
        height: 5
    };
    it ("Positive number", (done) => {
        request(app)
        .post("/rectangle")
        .send(data)
        .expect("Content-Type", /json/)
        .end((err, response) => {
            assert(response.body.area === 25 && response.body.perimeter === 20);
            done();
            if (err) return done(err);
          });

    }).timeout(1000);

    
    it ("Negative number", (done) => {
      data.height = -4
      request(app)
      .post("/rectangle")
      .send(data)
      .end((err, response) => {
          assert(response.body === "Unvalid numbers");
          done();
          if (err) return done(err);
        });

  }).timeout(1000);

  it ("Letter or String", (done) => {
    data.large = "a"
    request(app)
    .post("/rectangle")
    .send(data)
    .end((err, response) => {
        assert(response.body === "Unvalid numbers");
        done();
        if (err) return done(err);
      });

}).timeout(1000);

});