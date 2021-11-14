const request = require("supertest");
const assert = require ("assert")
const app = require("../index");

describe("Post Circle", () => {
    const data = {
      radio: 4
    };
    it ("Positive number", (done) => {
        request(app)
        .post("/circle")
        .send(data)
        .expect("Content-Type", /json/)
        .end((err, response) => {
            assert(response.body.area === data.radio*Math.PI*data.radio && response.body.perimeter === data.radio*2*Math.PI);
            done();
            if (err) return done(err);
          });

    }).timeout(1000);

    
    it ("Negative number", (done) => {
      data.radio = -4
      request(app)
      .post("/circle")
      .send(data)
      .end((err, response) => {
          assert(response.body === "Unvalid numbers");
          done();
          if (err) return done(err);
        });

  }).timeout(1000);

  it ("Letter or String", (done) => {
    data.radio = "a"
    request(app)
    .post("/circle")
    .send(data)
    .end((err, response) => {
        assert(response.body === "Unvalid numbers");
        done();
        if (err) return done(err);
      });

}).timeout(1000);

});