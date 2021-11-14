const request = require("supertest");
const assert = require ("assert")
const app = require("../index");

describe("Post Triangle", () => {
    const data = {
        l1 : 5,
        l2 : 5,
        l3 : Math.sqrt(50)
    };
    it ("Positive number", (done) => {
        request(app)
        .post("/triangle")
        .send(data)
        .expect("Content-Type", /json/)
        .end((err, response) => {
            assert(response.body.area === 12.5 && response.body.perimeter === 10+Math.sqrt(50));
            done();
            if (err) return done(err);
          });

    }).timeout(1000);

    
    it ("Negative number", (done) => {
      data.l2 = -4
      request(app)
      .post("/triangle")
      .send(data)
      .end((err, response) => {
          assert(response.body === "Unvalid numbers");
          done();
          if (err) return done(err);
        });

  }).timeout(1000);

  it ("Letter or String", (done) => {
    data.l1 = "a"
    request(app)
    .post("/triangle")
    .send(data)
    .end((err, response) => {
        assert(response.body === "Unvalid numbers");
        done();
        if (err) return done(err);
      });

}).timeout(1000);

});