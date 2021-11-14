const request = require("supertest");
const app = require("../../index");

describe("Post Fibonacci", () => {
    const data = {
      n: 4
    };
    it ("Calculate Fibonacci", (done) => {
        request(app)
        .post("/fibonacci")
        .send(data)
        .expect("Content-Type", /json/)
        .end((err) => {
            if (err) return done(err);
            done();
          });

    }).timeout(1000);

});