const request = require("supertest");
const assert = require ("assert")
const app = require("../index");

describe("Post Fibonacci", () => {
    const data = {
      n: 4
    };
    it ("Positive number", (done) => {
        request(app)
        .post("/fibonacci")
        .send(data)
        .expect("Content-Type", /json/)
        .end((err, response) => {
            assert(response.body.n === "0 1 1 2 ");
            done();
            if (err) return done(err);
          });

    }).timeout(1000);

    
    it ("Negative number", (done) => {
      data.n = -4
      request(app)
      .post("/fibonacci")
      .send(data)
      .end((err, response) => {
          assert(response.body === "Unvalid numbers");
          done();
          if (err) return done(err);
        });

  }).timeout(1000);

  it ("Letter or String", (done) => {
    data.n = "ProfeSiLeesEstoTqmYloMíoEsLaIngenieríaNoVenderBiblias"
    request(app)
    .post("/fibonacci")
    .send(data)
    .end((err, response) => {
        assert(response.body === "Unvalid numbers");
        done();
        if (err) return done(err);
      });

}).timeout(1000);

});