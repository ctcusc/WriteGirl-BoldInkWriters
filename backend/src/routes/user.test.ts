import request from "supertest"
import app from "../app"
import { expect } from "chai"
import { User } from "../models/User"

describe("POST /signup", () => {
  beforeEach(async () => {
    await User.destroy({
      where: {},
      truncate: true,
    })
  })

  it("should return 201 on successful user creation", async () => {
    await request(app)
      .post("/api/signup")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .send({
        email: "mevenson@usc.edu",
        password: "password123",
        confirmPassword: "password123",
      })
      .expect(201)
      .then((res: any) => {
        expect(res.body.email).to.equal("mevenson@usc.edu")
      })
  })

  it("should return 400 on password mismatch", async () => {
    await request(app)
      .post("/api/signup")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .send({
        email: "mevenson@usc.edu",
        password: "password123",
        confirmPassword: "password321",
      })
      .expect(400)
  })
})
