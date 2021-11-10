/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Country, conn } = require("../../src/db.js");

const agent = session(app);

xdescribe("Country routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() => Country.sync({ force: true }));

  describe("GET /api/countries", () => {
    it("should get 200", (done) => {
      agent.get("/api/countries").expect(200);
      done();
    });
  });

  describe("GET /api/countries/arg", () => {
    it("should get 200", (done) => {
      agent.get("/api/countries/arg").expect(200);
      done();
    });
  });

  describe("GET /api/countries?continent=Americas", () => {
    it("should get 200", (done) => {
      agent.get("/api/countries?continent=Americas").expect(200);
      done();
    });
  });

  describe("GET /api/countries?name=col", () => {
    it("should get 200", (done) => {
      agent.get("/api/countries?name=col").expect(200);
      done();
    });
  });

  describe("GET /api/countries?activity=trat", () => {
    it("should get 200", (done) => {
      agent.get("/api/countries?activity=trat").expect(200);
      done();
    });
  });
});
